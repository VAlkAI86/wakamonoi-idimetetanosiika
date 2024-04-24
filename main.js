/* let fps = 0;
const fps_shower = () => {
  console.log(fps);
  fps = 0;
};
const fps_adder = () => {
  fps++;
  requestAnimationFrame(fps_adder);
};
fps_adder();
setInterval(fps_shower, 1000); */

window.onload = function () {
  let pictures = returnpicture();
  let flame = 0;
  let scale = 15;
  let stage = document.getElementById("stage");
  let fps = 0;
  let picture;
  let picture_flame = 0;
  console.log(pictures.length);

  const play = () => {
    if (flame % 6 === 0) {
      stage.innerHTML = "";
      picture = "";
      //console.log(flame);
      for (let i = 0; i < scale * 3; i++) {
        for (let j = 0; j < scale * 4; j++) {
          if (pictures[picture_flame][i][j] === 0) {
            picture += "■&nbsp";
          } else {
            picture += "□&nbsp";
          }
        }
        picture += "<br>";
      }
      stage.innerHTML += picture;
      console.log("画像更新");
      picture_flame++;
    }
    flame++;
    fps++;

    if (picture_flame < pictures.length) {
      requestAnimationFrame(play);
    } else {
      picture_flame = 0;
      requestAnimationFrame(play);
    }
  };

  const fps_show = () => {
    console.log(fps, flame);
    if (fps !== 60) {
      flame += 60 - fps;
      console.log("補正しました");
      console.log(60 - fps + "フレーム");
    }
    fps = 0;
  };

  play();
  setInterval(fps_show, 1000);
};
