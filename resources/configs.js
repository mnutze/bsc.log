/**
 * @author Michael Nutzenberger <michael.nutzenberger@inf.h-brs.de> 2019
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "global": {
    // hash module needed for pseudonymization of user
    "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
    "hashUser": false,
    "onfinish": {
      "store": {
        "settings": { "name": 'mnutze2s_activity_log', "url": "https://ccm2.inf.h-brs.de" },
        "permissions_templ": {
          "creator": "Educator",
          "realm": "guest",
          "access": {
            "get": "all",
            "set": "creator",
            "del": "creator"
          }
        },
        "permissions": {
          "creator": "308cecce8e2115c780e374f13ecb4547",
          "realm": "hbrsinfpseudo",
          "group": {
            "admingroup": [ "479e5f8396cec7afccd68b097eabe5f9", "4c9d704dfcb512873c39ddeefdd559e1", "308cecce8e2115c780e374f13ecb4547" ],
            "studigroup": [ "479e5f8396cec7afccd68b097eabe5f9", "4c9d704dfcb512873c39ddeefdd559e1", "308cecce8e2115c780e374f13ecb4547", "%user%" ]
          },
          "access": {
            "get": "studigroup",
            "set": "admingroup",
            "del": "admingroup"
          }
        }
      }
    }
  },

  "greedy": {
    "key": "greedy",
    "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
    "hashUser": false,
    "logging": {
      "data": true,
      "browser": true,
      "parent": true,
      "root": true,
      "user": true,
      "website": true
    },
    "onfinish": { "log": true }
  },

  "monitoring": { // log configuration for different component types -> has to complete

    "cloze": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "comment": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "create": { "parent": true, "user": true }
      }
    },

    "content": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "start": { "parent": true, "user": true }
      }
    },

    "digital_clock": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        // event "start" starts rendering -> no user interaction -> maybe remove
        "start": { "parent": true, "user": true, "data": true },
        "clear": { "parent": true, "user": true, "data": true },
        "set": { "parent": true, "user": true, "data": true },
        "inc": { "parent": true, "user": true, "data": true }
      }
    },

    "fast_poll": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        // event "start" starts rendering -> no user interaction -> maybe remove
        "start": { "parent": true, "user": true, "data": true },
        "click": { "parent": true, "user": true, "data": true },
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "feedback": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "create": { "parent": true, "user": true, "data": true }
      }
    },

    "kanban_board": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "drag": { "parent": true, "user": true, "data": true },
        "drop": { "parent": true, "user": true, "data": true },
        "del": { "parent": true, "user": true, "data": true },
        "add": { "parent": true, "user": true, "data": true },
      }
    },

    "live_poll": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "log_render_only": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "render": { "parent": true, "user": true, "data": true }
      }
    },

    "log_start_only": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "start": { "parent": true, "user": true, "data": true }
      }
    },

    "menu": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "click": { "parent": true, "user": true, "data": true }
      }
    },

    "pdf_viewer": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        // event "start" starts rendering -> no user interaction -> maybe remove
        "start": { "parent": true, "user": true, "data": true },
        "goto": { "parent": true, "user": true, "data": true },
        "prev": { "parent": true, "user": true, "data": true },
        "next": { "parent": true, "user": true, "data": true }
      }
    },

    "quick_decide": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "click": { "parent": true, "user": true, "data": true },
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "quiz": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "regex": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "start": { "parent": true, "user": true, "data": true },
        "eval": { "parent": true, "user": true, "data": true },
        "plus": { "parent": true, "user": true, "data": true },
        "regex": { "parent": true, "user": true, "data": true }
      }
    },

    "show_solutions": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "show": { "parent": true, "user": true, "data": true },
        "more": { "parent": true, "user": true, "data": true }
      }
    },

    "submit": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "submit": { "parent": true, "user": true, "data": true }
      }
    },

    "teambuild": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "rename": { "parent": true, "user": true, "data": true },
        "leave": { "parent": true, "user": true, "data": true },
        "join": { "parent": true, "user": true, "data": true }
      }
    },

    "upload": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "sync": { "parent": true, "user": true, "data": true },
        "success": { "parent": true, "user": true, "data": true }
      }
    },

    "uml": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "sync": { "parent": true, "user": true, "data": true }
      }
    },

    "user": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "login": { "parent": true, "user": true, "data": true },
        "logout": { "parent": true, "user": true, "data": true }
      }
    },

    "youtube": {
      "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
      "onfinish": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.onfinish"],
      "hashUser": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global.hashUser"],
      "events": {
        "onReady": { "parent": true, "user": true, "data": true },
        "onStateChange": { "parent": true, "user": true, "data": true },
        "onPlaybackQualityChange": { "parent": true, "user": true, "data": true },
        "onPlaybackRateChange": { "parent": true, "user": true, "data": true },
        "onApiChange": { "parent": true, "user": true, "data": true },
        "onError": { "parent": true, "user": true, "data": true }
      }
    },

  },

};