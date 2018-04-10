const moveForce = 30; // max popup movement in pixels
const rotateForce = 20; // max popup rotation in deg

const docX = $(document).width();
const docY = $(document).height();

$(document).mousemove(function(e) {
  const moveX = (e.pageX - docX / 2) / (docX / 2) * -moveForce;
  const moveY = (e.pageY - docY / 2) / (docY / 2) * -moveForce;

  const rotateY = e.pageX / docX * rotateForce * 2 - rotateForce;
  const rotateX = -(e.pageY / docY * rotateForce * 2 - rotateForce);

  $(".popup")
    .css("left", `${moveX}px`)
    .css("top", `${moveY}px`)
    .css(
      "transform",
      "rotateX(" + `${rotateX}deg) rotateY(${rotateY}deg)`
    );
});
