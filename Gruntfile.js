module.exports = function(grunt) {
  grunt.initConfig({

    concat: {
      options: {separator: ";"},
      enjine: {
        // Order matters here.
        src: [
          "Enjine/core.js",
          "Enjine/gameCanvas.js",
          "Enjine/keyboardInput.js",
          "Enjine/resources.js",
          "Enjine/drawable.js",
          "Enjine/state.js",
          "Enjine/gameTimer.js",
          "Enjine/camera.js",
          "Enjine/drawableManager.js",
          "Enjine/sprite.js",
          "Enjine/spriteFont.js",
          "Enjine/frameSprite.js",
          "Enjine/animatedSprite.js",
          "Enjine/collideable.js",
          "Enjine/application.js",
        ],
        dest: "temp/enjine.js",
      },
      mario: {
        // Order matters here.
        src: [
          "code/setup.js",
          "code/spriteCuts.js",
          "code/level.js",
          "code/backgroundGenerator.js",
          "code/backgroundRenderer.js",
          "code/improvedNoise.js",
          "code/notchSprite.js",
          "code/character.js",
          "code/levelRenderer.js",
          "code/levelGenerator.js",
          "code/spriteTemplate.js",
          "code/enemy.js",
          "code/fireball.js",
          "code/sparkle.js",
          "code/coinAnim.js",
          "code/mushroom.js",
          "code/particle.js",
          "code/fireFlower.js",
          "code/bulletBill.js",
          "code/flowerEnemy.js",
          "code/shell.js",
          // States.
          "code/titleState.js",
          "code/loadingState.js",
          "code/loseState.js",
          "code/winState.js",
          "code/mapState.js",
          "code/levelState.js",
          // Music. Commented out in code, too.
          //"code/music.js",
        ],
        dest: "temp/mario.js",
      },
    },

    uglify: {
      enjine: {
        src: ["<%= concat.enjine.dest %>"],
        dest: "enjine.min.js",
      },
      mario: {
        src: ["<%= concat.mario.dest %>"],
        dest: "mario.min.js",
      },
    },

    watch: {
      typescript: {
        files: ["code/*", "Enjine/*"],
        tasks: ['default'],
      }
    },

  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask('default', ['concat', 'uglify']);

};
