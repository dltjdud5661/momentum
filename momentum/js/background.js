const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
//이미지 파일을 요소로 하는 배열인 변수 images를 만든다.
const chosenImage = images[Math.floor(Math.random()*images.length)];
//배열 요소들이 랜덤으로 반환되는 chosenImage 라는 변수 만든다.
const bgImage = document.createElement("img");
//createElement()를 통해 자바스크립트에서 img 태그 요소를 생성하는 변수 bgImage를 만든다.
bgImage.src = `img/${chosenImage}`;
//HTML에서 img 태그를 작성하듯이 똑같이 만든다.
document.body.appendChild(bgImage);
//appendChild()를 통해 부모요소인 body 안에 bgImage를 삽입해준다.