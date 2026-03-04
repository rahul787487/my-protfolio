import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!window.Matter) return; // Wait for Matter.js to load

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.Matter.use("matter-attractors");
    window.Matter.use("matter-wrap");

    // module aliases
    const Engine = window.Matter.Engine,
      Events = window.Matter.Events,
      Runner = window.Matter.Runner,
      Render = window.Matter.Render,
      World = window.Matter.World,
      Body = window.Matter.Body,
      Mouse = window.Matter.Mouse,
      Common = window.Matter.Common,
      Bodies = window.Matter.Bodies;

    // create engine
    const engine = Engine.create();

    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0.1;

    // create renderer
    const render = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        showVelocity: false,
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // create runner
    const runner = Runner.create();

    // create demo scene
    const world = engine.world;
    world.gravity.scale = 0;

    // create a body with an attractor (center)
    const attractiveBody = Bodies.circle(
      render.options.width / 2,
      render.options.height / 2,
      Math.max(dimensions.width / 25, dimensions.height / 25) / 2,
      {
        render: {
          fillStyle: `#000`,
          strokeStyle: `#000`,
          lineWidth: 0,
        },
        isStatic: true,
        plugin: {
          attractors: [
            function (bodyA, bodyB) {
              return {
                x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                y: (bodyA.position.y - bodyB.position.y) * 1e-6,
              };
            },
          ],
        },
      }
    );

    World.add(world, attractiveBody);

    // Adjust particle count for smaller screens to improve performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 24 : 60;

    // add some bodies that to be attracted
    for (let i = 0; i < particleCount; i += 1) {
      let x = Common.random(0, render.options.width);
      let y = Common.random(0, render.options.height);
      let s = isMobile
        ? Common.random(6, 30)
        : Common.random() > 0.6
        ? Common.random(10, 80)
        : Common.random(4, 60);
      let poligonNumber = Common.random(3, 6);
      const body = Bodies.polygon(
        x,
        y,
        poligonNumber,
        s,
        {
          mass: Math.max(0.1, s / 20),
          friction: 0,
          frictionAir: isMobile ? 0.03 : 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: "#222222",
            strokeStyle: `#000000`,
            lineWidth: isMobile ? 1 : 2,
          },
        }
      );

      World.add(world, body);

      let r = Common.random(0, 1);
      const circle1 = Bodies.circle(x, y, Common.random(2, isMobile ? 6 : 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: isMobile ? 0.02 : 0.01,
        render: {
          fillStyle: r > 0.3 ? `#27292d` : `#444444`,
          strokeStyle: `#000000`,
          lineWidth: isMobile ? 1 : 2,
        },
      });

      World.add(world, circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, isMobile ? 12 : 20), {
        mass: isMobile ? 1.5 : 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: r > 0.3 ? `#334443` : `#222222`,
          strokeStyle: `#111111`,
          lineWidth: isMobile ? 2 : 4,
        },
      });

      World.add(world, circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, isMobile ? 12 : 30), {
        mass: 0.2,
        friction: isMobile ? 0.4 : 0.6,
        frictionAir: isMobile ? 0.6 : 0.8,
        render: {
          fillStyle: `#191919`,
          strokeStyle: `#111111`,
          lineWidth: isMobile ? 1 : 3,
        },
      });

      World.add(world, circle3);
    }

    // add mouse control
    const mouse = Mouse.create(document.body);

    Events.on(engine, "afterUpdate", function () {
      if (!mouse.position.x) return;
      // smoothly move the attractor body towards the mouse
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    // Handle resize: update renderer and reposition attractor
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      render.canvas.width = w;
      render.canvas.height = h;
      render.options.width = w;
      render.options.height = h;
      // reposition static attractor to center if it exists
      try {
        Body.setPosition(attractiveBody, { x: w / 2, y: h / 2 });
      } catch (e) {
        // ignore if attractor not available
      }
      // ensure canvas fills container
      render.canvas.style.width = '100%';
      render.canvas.style.height = '100%';
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default AnimatedBackground;