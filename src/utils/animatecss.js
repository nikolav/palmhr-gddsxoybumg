import q from "nikolav-q";

const ANIMATE = "animate__";

const animatecss = (e, effect = "headShake") =>
  new Promise((resolve, reject) => {
    
    const animated = ANIMATE + "animated";

    effect = ANIMATE + effect;
    if (q.type.string === q.type(e)) e = q.s(e);
    
    q.on({
      e,
      on: "animationend",
      run: end_,
      options: { once: true },
    });

    q.class.add(e, animated, effect);

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
