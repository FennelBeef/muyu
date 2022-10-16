/**
 
                          _ooOoo_
                          o8888888o
                          88" . "88
                          (| -_- |)
                          O\ = /O
                      ____/`---'\____
                    .   ' \\| |// `.
                      / \\||| : |||// \
                    / _||||| -:- |||||- \
                      | | \\\ - /// | |
                    | \_| ''\---/'' | |
                    \ .-\__ `-` ___/-. /
                  ___`. .' /--.--\ `. . __
              ."" '< `.___\_<|>_/___.' >'"".
              | | : `- \`.;`\ _ /`;.`/ - ` : | |
                \ \ `-. \_ __\ /__ _/ .-` / /
        ======`-.____`-.___\_____/___.-`____.-'======
                          `=---='

        .............................................
              佛祖保佑             永无BUG
      佛曰:
              写字楼里写字间，写字间里程序员；
              程序人员写程序，又拿程序换酒钱。
              酒醒只在网上坐，酒醉还来网下眠；
              酒醉酒醒日复日，网上网下年复年。
              但愿老死电脑间，不愿鞠躬老板前；
              奔驰宝马贵者趣，公交自行程序员。
              别人笑我忒疯癫，我笑自己命太贱；
              不见满街漂亮妹，哪个归得程序员？
* 
*/
window.onload = function () {
  localStorage.setItem("count", localStorage.getItem("count") || 0);
  var impotant = document.querySelector("#impotant");
  var gongdeliang = document.querySelector(".gongdeliang");
  gongdeliang.innerHTML = localStorage.getItem("count") || 0;
  impotant.addEventListener("click", function () {
    if (localStorage.getItem("myname") == "null") {
      alert("施主请登录，否则功德无法录入系统！");
    } else {
      document.getElementById("a").play();
      document.querySelector(".floatbox").style.display = "block";
      setTimeout(() => {
        document.querySelector(".floatbox").style.display = "none";
      }, 500);
      localStorage.setItem("count", Number(localStorage.getItem("count")) + 1);

      gongdeliang.innerHTML = localStorage.getItem("count");
    }
  });
  var ko1 = document.querySelector("#ko1");
  ko1.addEventListener("click", function () {
    if (localStorage.getItem("count") >= 1) {
      localStorage.setItem("count", Number(localStorage.getItem("count")) - 9);
      document.getElementById("b").play();
      gongdeliang.innerHTML = localStorage.getItem("count");
    } else {
      alert("请增加功德");
    }
  });
  // localStorage.getItem("myname");
  // localStorage.setItem("myname", null);
  var reg = document.querySelector("#reg");
  localStorage.setItem("myname", localStorage.getItem("myname") || null);
  if (localStorage.getItem("myname") != "null") {
    reg.innerHTML = localStorage.getItem("myname");
    // reg.disabled = true;
  }
  reg.addEventListener("click", function () {
    var name = document.querySelector("#name").value;
    if (name == "") {
      alert("施主请输入姓名：");
      return;
    } else {
      localStorage.setItem("myname", name);
      alert("登录成功");
      reg.innerHTML = localStorage.getItem("myname");
      // reg.disabled = true;
    }
  });
};
