/**
 * @author Michael Nutzenberger <michael.nutzenberger@inf.h-brs.de> 2019
 * @license The MIT License (MIT)
 */

ccm.files[ 'configs.js' ] = {

  "global": {
    // hash module needed for pseudonymization of user
    "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
    "onfinish": { "store": { "settings": { "name": 'mnutze2s_log', "url": "wss://ccm2.inf.h-brs.de" } } }
  },

  "monitoring": { // log configuration for different component types -> has to complete

    "cloze": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "comment": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "create": { "parent": true, "user": true, "data": true },
        "edit": { "parent": true, "user": true, "data": true }
      }
    },

    "fast_poll": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "start": { "parent": true, "user": true, "data": true },
        "click": { "parent": true, "user": true, "data": true },
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "feedback": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "create": { "parent": true, "user": true, "data": true }
      }
    },

    "live_poll": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "menu": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "click": { "parent": true, "user": true, "data": true }
      }
    },

    "pdf_viewer": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "start": { "parent": true, "user": true, "data": true },
        "goto": { "parent": true, "user": true, "data": true },
        "prev": { "parent": true, "user": true, "data": true },
        "next": { "parent": true, "user": true, "data": true }
      }
    },

    "quick_decide": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "click": { "parent": true, "user": true, "data": true },
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "quiz": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "finish": { "parent": true, "user": true, "data": true }
      }
    },

    "show_solutions": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "show": { "parent": true, "user": true, "data": true },
        "more": { "parent": true, "user": true, "data": true }
      }
    },

    "submit": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "submit": { "parent": true, "user": true, "data": true }
      }
    },

    "teambuild": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "rename": { "parent": true, "user": true, "data": true },
        "leave": { "parent": true, "user": true, "data": true },
        "join": { "parent": true, "user": true, "data": true }
      }
    },

    "upload": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "sync": { "parent": true, "user": true, "data": true },
        "success": { "parent": true, "user": true, "data": true }
      }
    },

    "uml": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "sync": { "parent": true, "user": true, "data": true }
      }
    },

    "user": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "login": { "parent": true, "user": true, "data": true },
        "logout": { "parent": true, "user": true, "data": true }
      }
    },

    "youtube": { "key": ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "global"],
      "events": {
        "onReady": { "parent": true, "user": true, "data": true },
        "onStateChange": { "parent": true, "user": true, "data": true },
        "onPlaybackQualityChange": { "parent": true, "user": true, "data": true },
        "onPlaybackRateChange": { "parent": true, "user": true, "data": true },
        "onApiChange": { "parent": true, "user": true, "data": true },
        "onError": { "parent": true, "user": true, "data": true }
      }
    },

  }

};