let fNum, sNum, answer, cNum = 0;

$(document).ready(function () {
  refresh();
debugger;
  $(".answer").change((e) => (answer = +e.target.value));
  $(".submit").click(() => {
    let result;

    if( fNum + answer == sNum ){
        result = "correct";
        cNum++;
    }else{
        result = "wrong";
    }

    alert(result);
    if(cNum == 50) window.location.href = "https://www.youtube.com/channel/UCdet8uJfTFlACtY05BQmJ1Q";
    $(".answer").val("");
    refresh();
  });
});

const refresh = () => {
  fNum = ~~(Math.random() * 10);
  sNum = ~~(Math.random() * 10)+10;
  $(".fNum").html(fNum);
  $(".sNum").html(sNum);
  $('.count').html(cNum);
};
