let fNum, sNum, answer;

$(document).ready(function () {
  refresh();

  $("input[type='number']").change((e) => (answer = e.target.value));
  $(".submit").click(() => {
    let result;
    result = fNum + sNum == answer ? "correct" : "wrong";
    alert(result);
    $(".answer").val("");
    refresh();
  });
});

const refresh = () => {
  fNum = ~~(Math.random() * 10);
  sNum = ~~(Math.random() * 10);
  $(".fNum").html(fNum);
  $(".sNum").html(sNum);
};
