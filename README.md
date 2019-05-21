# Extended logging
a fork of ccm.log.js from André Kless https://github.com/ccmjs/akless-components

### To use this component as logger you've to regard following steps

   (1) Copy & Paste following into your component config 
```
"descr": "A SHORT HUMAN-READABLE COMPONENT DESCRIPTION",
"logger": [ "ccm.instance", "https://mnutze.github.io/bsc.log/ccm.log.js", 
    ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "monitoring.COMPONENT_TYPE" ] ], 
```

   (2) Give your component a unique human-readable description, like a title - later you can identify easily your logged events from this component. 
   
   __You can skip this step if your component use a store with a key - ``STORE_KEY`` - in their settings. See below__
   ```
   "data": {
      "store": [ "ccm.store", { "name": "mnutze2s_cscl", "url": "https://ccm2.inf.h-brs.de" } ],
      "key": "STORE_KEY"
   } 
   ```
   
   (3) Change ```monitoring.COMPONENT_TYPE``` to the wanted component type. Currently are these components predefined:
   * cloze
   * comment
   * fast_poll
   * feedback
   * kanban_board
   * live_poll
   * menu
   * pdf_viewer
   * quick_decide
   * quiz
   * show_solutions
   * submit
   * teambuild
   * upload
   * uml
   * user
   * youtube
   * __... will be continued__
   
   (4) If your component type isn't listened or your want to modify your log-config -> feel free to use https://mnutze.github.io/bsc.log/resources/configs.js as template


---
