/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "홍성원",
    nameEn: "Groom",
    father: "홍진표",
    mother: "장은아",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "류효담",
    nameEn: "Bride",
    father: "류동열",
    mother: "최화숙",
    fatherDeceased: true,
    motherDeceased: false
  },

  wedding: {
    date: "2027-01-17",
    time: "12:00",
    venue: "울산시티컨벤션",
    hall: "예그리나홀",
    address: "울산광역시 중구 염포로 55",
    tel: "052-279-2020",
    mapLinks: {
      kakao: "https://kko.to/6C_DbzV0w7",
      naver: "https://naver.me/F2ZupJ2u"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어온 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "8번의 봄을 함께 보내며\n서로에게 가장 익숙한 보금자리가 되었습니다.\n쌓아온 온기 위에 새로운 설렘을 얹어\n더 오래, 더 다정하게 둘만의 길을 그리려 합니다.\n새 봄을 같이 맞이 하고자 1월에 첫 발을 내딛습니다. \n\n오셔서 따뜻한 격려로 축복해주시기 바랍니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "홍성원", bank: "국민은행", number: "939302-00-675371" },
      { role: "아버지", name: "홍진표", bank: "우리은행", number: "038-043505-12-001" },
      { role: "어머니", name: "장은아", bank: "국민은행", number: "661-21-0752-738" }
    ],
    bride: [
      { role: "신부", name: "류효담", bank: "카카오뱅크", number: "3333-05-4968663" },
      { role: "어머니", name: "최화숙", bank: "경남은행", number: "612-21-0202347" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "성원 ♥ 효담 결혼합니다",
    description: "2027년 1월 17일, 소중한 분들을 초대합니다."
  }
};
