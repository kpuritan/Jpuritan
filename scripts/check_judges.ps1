$text = [System.IO.File]::ReadAllText("$PSScriptRoot\..\data.json", [System.Text.Encoding]::UTF8)
$json = ConvertFrom-Json $text
$judgesCats = @($json.categories | Where-Object { $_.nameKr -like '*사사기*' -or $_.nameJp -like '*士師記*' })
Write-Host "Found Judges Categories: $($judgesCats.Count)"
foreach ($c in $judgesCats) {
    Write-Host "Cat: $($c.id) | $($c.nameKr) | $($c.nameJp) | parent: $($c.parentId)"
}
$judgesCatIds = $judgesCats.id
$posts = @($json.posts | Where-Object { $judgesCatIds -contains $_.categoryId -or $_.title -like '*사사기*' -or $_.scripture -like '*사사기*' -or $_.scripture -like '*士師記*' })
Write-Host "Found Judges Posts: $($posts.Count)"
foreach ($p in $posts) {
    Write-Host "$($p.id) | $($p.categoryId) | $($p.title) | $($p.scripture)"
}
