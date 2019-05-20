# Extended logging
a fork of ccm.log.js from André Kless https://github.com/ccmjs/akless-components

To use this component as logger you've to regard following steps:

   (1) Copy & Paste following into your component config 
```
"logger": [ "ccm.instance", "https://mnutze.github.io/bsc.log/ccm.log.js", 
    ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "monitoring.COMPONENT_TYPE" ] ], 
```
   (2) Change ```monitoring.COMPONENT_TYPE``` to the wanted component type. Currently are these components predefined:
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
   
   (3) If your component type isn't listened or your want to modify your log-config -> feel free to use https://mnutze.github.io/bsc.log/resources/configs.js as template
