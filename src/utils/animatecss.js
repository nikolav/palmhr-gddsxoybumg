
import q from "nikolav-q"; // few dom shortcuts

const ANIMATE = "animate__";


// effects with animate.css classes
// add an effect, listen for `animationend`
// unsubscribe listeners when done

const animatecss = (e, effect = "headShake") =>
  new Promise((resolve, reject) => {
    
    const animated = ANIMATE + "animated";

    effect = ANIMATE + effect;

    // types match?
    if (q.type.string === q.type(e)) e = q.s(e);
    
    // .addEventListener
    q.on({
      e,
      on: "animationend",
      run: end_,
      options: { once: true },
    });

    // classList
    q.class.add(e, animated, effect);

    // self remove handler
    function end_(evt) {
      q.class.rm(e, animated, effect);
      q.off({
        target: e,
        callback: end_,
      });
      resolve(evt);
    }

  });

export default animatecss;
