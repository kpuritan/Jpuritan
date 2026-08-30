# 日本 改革派神学 と 牧会 (Japan Reformed Theology) Android App Project

현재 웹사이트를 **정식 안드로이드 네이티브 앱(APK / Google Play 배포용 AAB)**으로 빌드할 수 있는 완전한 Android Studio 프로젝트입니다.

---

## 📱 앱 주요 기능
1. **전체화면 고성능 WebView 탑재**: 브라우저 주소창 없이 진짜 네이티브 앱으로 구동
2. **당겨서 새로고침 (Pull to Refresh)**: 화면을 아래로 당기면 실시간 데이터 새로고침
3. **상단 프로그레스 바**: 금색(#C5A059) 로딩 인디케이터 적용
4. **하드웨어 뒤로가기 버튼 지원**: 이전 페이지 이동 및 두 번 연속 터치 시 앱 종료 안내
5. **유튜브 동영상 전체화면 지원**: 비디오 강의 전체화면 자동 전환
6. **상단 상태바 테마 일치**: Deep Navy (#0A1C36) 색상 적용

---

## 🛠️ 앱 빌드 및 APK 생성 방법 (초간단 3단계)

### 1단계: Android Studio 열기
1. [Android Studio 공식 사이트](https://developer.android.com/studio)에서 Android Studio를 무료로 설치합니다.
2. Android Studio를 실행하고 **`Open` (프로젝트 열기)**을 클릭합니다.
3. 이 폴더 (`c:\Users\user\Desktop\청교도 사이트 (일본)\android-app`)를 선택하여 엽니다.

### 2단계: 자동 Gradle 동기화
* 프로젝트를 열면 Android Studio가 필요한 라이브러리를 자동으로 다운로드하고 동기화합니다. (1~2분 소요)

### 3단계: APK 파일 추출 (핸드폰 설치용)
1. 상단 메뉴에서 **`Build` ➔ `Build Bundle(s) / APK(s)` ➔ `Build APK(s)`**를 클릭합니다.
2. 우측 하단에 **`locate`** 알림 버튼이 뜨면 클릭합니다.
3. 생성된 **`app-debug.apk`** 파일을 카카오톡이나 이메일, USB로 본인 또는 성도님 핸드폰에 전송하여 설치하시면 즉시 앱으로 실행됩니다!

---

## 🌐 구글 플레이스토어 정식 출시 방법
1. 상단 메뉴에서 **`Build` ➔ `Generate Signed Bundle / APK...`** 선택
2. **`Android App Bundle (.aab)`** 선택 후 키스토어(KeyStore) 생성
3. [Google Play Console](https://play.google.com/console) 개발자 계정에 로그인 후 `.aab` 파일을 업로드하여 출시 심사 신청!
