# Google Analytics 및 Search Console 설정 가이드

## 1. Google Analytics 4 설정

### 1.1 GA4 계정 생성
1. [Google Analytics](https://analytics.google.com/) 접속
2. "측정 시작" 클릭
3. 계정 이름: "Marpe Church"
4. 속성 이름: "Marpe Church Website"
5. 보고 시간대: "Eastern Time"
6. 통화: "US Dollar"

### 1.2 추적 코드 추가
GA4에서 제공하는 측정 ID (G-XXXXXXXXXX)를 받은 후, `index.html`에 다음 코드를 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 2. Google Search Console 설정

### 2.1 사이트 등록
1. [Google Search Console](https://search.google.com/search-console) 접속
2. "속성 추가" 클릭
3. 도메인: `www.marpechurch.org`
4. 소유권 확인 (HTML 태그 또는 DNS 레코드)

### 2.2 사이트맵 제출
1. Search Console에서 "사이트맵" 메뉴 선택
2. 새 사이트맵 추가: `https://www.marpechurch.org/sitemap.xml`
3. 제출 후 인덱싱 상태 모니터링

### 2.3 성과 모니터링
- "성과" 메뉴에서 검색 쿼리 확인
- "보스턴 교회", "보스톤 한인 교회" 등 키워드 순위 추적
- 클릭 수, 노출 수, CTR 모니터링

## 3. Google My Business 설정

### 3.1 비즈니스 계정 생성
1. [Google My Business](https://business.google.com/) 접속
2. "비즈니스 관리" 클릭
3. 비즈니스 유형: "종교 기관"
4. 비즈니스 이름: "보스턴 마르페 교회"
5. 주소: "212 School St, Somerville, MA 02145"

### 3.2 상세 정보 입력
- 전화번호: 교회 전화번호
- 웹사이트: https://www.marpechurch.org
- 영업시간: 일요일 14:00-16:00
- 서비스: "한국어 예배", "한인 교회", "보스턴 교회"

### 3.3 사진 및 리뷰 관리
- 교회 외부/내부 사진 업로드
- 예배 사진 및 활동 사진 추가
- 방문자 리뷰 응답 및 관리

## 4. 추가 SEO 도구

### 4.1 Google PageSpeed Insights
- [PageSpeed Insights](https://pagespeed.web.dev/)에서 사이트 성능 확인
- 모바일 및 데스크톱 최적화 점수 확인
- 개선 권장사항 적용

### 4.2 Google Rich Results Test
- [Rich Results Test](https://search.google.com/test/rich-results)에서 구조화된 데이터 확인
- Church 스키마 마크업 검증

### 4.3 Google Mobile-Friendly Test
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)에서 모바일 최적화 확인

## 5. 정기 모니터링

### 5.1 주간 체크리스트
- [ ] Google Analytics 방문자 수 확인
- [ ] Search Console 검색 성과 확인
- [ ] Google My Business 인사이트 확인
- [ ] 새로운 리뷰 확인 및 응답

### 5.2 월간 체크리스트
- [ ] 키워드 순위 변화 분석
- [ ] 콘텐츠 업데이트 계획
- [ ] 백링크 기회 탐색
- [ ] 경쟁사 분석

## 6. 키워드 추적

### 6.1 주요 키워드
- "보스턴 교회" (Boston Church)
- "보스톤 한인 교회" (Boston Korean Church)
- "보스턴 마르페 교회" (Boston Marpe Church)
- "소머빌 교회" (Somerville Church)
- "보스턴 한국 교회" (Boston Korean Church)

### 6.2 지역 키워드
- "보스턴 한인 커뮤니티"
- "보스턴 유학생 교회"
- "보스턴 청년 교회"
- "보스턴 젊은 부부 교회"

## 7. 성과 측정 지표

### 7.1 트래픽 지표
- 월간 방문자 수
- 페이지뷰 수
- 세션 지속 시간
- 이탈률

### 7.2 검색 성과 지표
- 키워드 순위
- 검색 노출 수
- 클릭 수
- 클릭률 (CTR)

### 7.3 전환 지표
- 연락처 페이지 방문
- 등록 폼 제출
- 지도 클릭 수
- 소셜 미디어 링크 클릭 