[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$baseDir = Split-Path -Parent $scriptDir
$dataJsonPath = Join-Path $baseDir "data.json"
$dataJsPath = Join-Path $baseDir "data.js"

Write-Output "Reading data.json from $dataJsonPath..."
$jsonContent = [System.IO.File]::ReadAllText($dataJsonPath, [System.Text.Encoding]::UTF8)
$data = $jsonContent | ConvertFrom-Json

$covenantOrder = @(
  "art_1792927982023",
  "art_1792943707748",
  "art_1792945593334",
  "art_1792944530449",
  "art_1792929202549",
  "art_1792930615418",
  "art_1792931332178",
  "art_1792932550337",
  "art_1792928673410",
  "art_1792973168778",
  "art_1792973839839",
  "art_1792974347708",
  "art_1792975620118",
  "art_1792976472949",
  "art_1792977609760",
  "art_1792978100456"
)

Write-Output "Assigning positions 1..16..."
$covenantMap = @{}
for ($i = 0; $i -lt $covenantOrder.Count; $i++) {
  $covenantMap[$covenantOrder[$i]] = ($i + 1)
}

foreach ($art in $data.articles) {
  if ($covenantMap.ContainsKey($art.id)) {
    $posVal = [int]$covenantMap[$art.id]
    $art | Add-Member -NotePropertyName position -NotePropertyValue $posVal -Force
  }
}

$covenantArtObjects = @()
foreach ($cid in $covenantOrder) {
  $match = $data.articles | Where-Object { $_.id -eq $cid }
  if ($match) {
    $covenantArtObjects += $match
  } else {
    Write-Warning "Missing article: $cid"
  }
}

$newArticles = @()
$covenantInserted = $false

foreach ($art in $data.articles) {
  if ($covenantMap.ContainsKey($art.id)) {
    if (-not $covenantInserted) {
      foreach ($ca in $covenantArtObjects) {
        $newArticles += $ca
      }
      $covenantInserted = $true
    }
  } else {
    $newArticles += $art
  }
}

$data.articles = $newArticles

Write-Output "Sorted Covenant Articles:"
foreach ($a in $covenantArtObjects) {
  Write-Output "  Pos $($a.position): $($a.title) [$($a.id)]"
}

Write-Output "Saving data.json..."
$newJson = $data | ConvertTo-Json -Depth 100
[System.IO.File]::WriteAllText($dataJsonPath, $newJson, [System.Text.Encoding]::UTF8)

Write-Output "Saving data.js..."
$jsContent = "const initialData = " + $newJson + ";" + [Environment]::NewLine +
"if (typeof window !== `"undefined`") {" + [Environment]::NewLine +
"  window.SITE_DATA = initialData;" + [Environment]::NewLine +
"  window.MASTER_SITE_DATABASE = initialData;" + [Environment]::NewLine +
"}" + [Environment]::NewLine +
"if (typeof module !== `"undefined`") {" + [Environment]::NewLine +
"  module.exports = initialData;" + [Environment]::NewLine +
"}" + [Environment]::NewLine

[System.IO.File]::WriteAllText($dataJsPath, $jsContent, [System.Text.Encoding]::UTF8)
Write-Output "Finished successfully!"
