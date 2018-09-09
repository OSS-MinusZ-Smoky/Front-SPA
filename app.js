let express = require('express');
let path = require('path');
let app = express();
let CONTRY;

let KOREA = {
  강원도: ['원주', '춘천', '강릉', '동해', '속초', '삼척', '태백'],

  경상도: ['부산', '대구', '울산', '창원', '김해', '포항', '구미', '진주', '양산', '경산', '경주', '거제', '안동', '김천', '통영', '사천', '영주', '밀양', '상주', '영천', '문경'],

  경기도: ['서울', '인천', '수원', '고양', '용인', '성남', '부천', '안산', '남양주', '화성', '안양', '평택', '시흥', '의정부', '파주', '김포', '광명', '광주', '군포', '오산', '이천', '양주', '안성', '구리', '포천', '의왕', '하남', '여주', '동두천', '과천'],

  전라도: ['광주', '전주', '익산', '군산', '여수', '순천', '목포', '광양', '정읍', '나주', '김제', '남원'],

  충청도: ['대전', '청주', '천안', '아산', '충주', '세종', '서산', '당진', '제천', '논산', '공주', '보령', '계룡', '제주', '서귀포']
}

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

})

app.get('/go', (req, res) => {
  CONTRY = req.query.contry;
  res.sendFile(path.join(__dirname, '/public/main.html'))
})

app.get('/go/getcontry', (req, res) => {
  res.json({
    contry: CONTRY
  })
})

app.get('/go/getcontrydistricts',(req,res)=>{
  res.json(KOREA);
})

app.listen(3000, () => {
  console.log("3000 go");
})