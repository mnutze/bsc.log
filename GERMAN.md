# Extended logging
a fork of ccm.log.js from André Kless https://github.com/ccmjs/akless-components

Um für das Monitoring-System Interaktionen aufzuzeichnen, muss mein fork von Herrn Kless ccm log-Komponente in die Konfigurationen der Komponenten aufgenommen werden. Für Komponenten-Typen, die unter https://mnutze.github.io/bsc.log/ gelistet sind, kann eine vordefinierte Konfiguration verwendet, oder aber dem Schema folgend frei definiert werden:
```
"descr": "A SHORT HUMAN-READABLE COMPONENT DESCRIPTION",
"logger": [ "ccm.instance", "https://mnutze.github.io/bsc.log/ccm.log.js", {
  // hash module needed for pseudonymization and hashing config as context-id
  "hash": [ "ccm.load", { "url": "https://ccmjs.github.io/akless-components/modules/md5.js", "type": "module" } ],
  /* activate pseudonymization if user isn't a pseudonym */
  "hashUser": false,
  "events": { ... },
  "onfinish": {
    "store": {
      "settings": { "name": 'mnutze2s_activity_log', "url": "wss://ccm2.inf.h-brs.de" },
      "permissions": {
        "creator": ... , // should be the teacher
        "realm": ... ,
        // maybe time-restricted access
        "access": {
          "get": "all", 
          "set": "creator",
          "del": "creator"
        }
      }
    }
  }
} ],
```
Um später in einem Monitor eine bestimmte Komponente wieder eindeutig identifizieren zu können, erzeugt der log-fork einen md5-hash der parent.config. Damit die Komponente auch in einem für Menschen lesbaren Format zu identifizierbar ist, sollte der parent-Komponente auch eine property `"descr"` mit einer/m kurzen prägnanten Beschreibung/Titel als Wert hinzugefügt werden. Dieser Schritt kann übersprungen werden wenn die Komponente einen store mit einem key benutzt.
```
...
"data": {
  "store": [ "ccm.store", { "name": "mnutze2s_cscl", "url": "https://ccm2.inf.h-brs.de" } ],
  "key": "STORE_KEY"
}
...
```
dieser `STORE_KEY` kann statt der parent.descr benutzt werden.

Für folgende Komponenten-Typen existieren vordefinierte Konfigurationen um Interaktionen aufzuzeichnen:
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

Um diese Konfigurationen zu nutzen, folgendes in die Komponenten-Konfiguration einbinden und den entsprechenden `COMPONENT_TYPE` ersetzen.
```
"descr": "A SHORT HUMAN-READABLE COMPONENT DESCRIPTION",
"logger": [ "ccm.instance", "https://mnutze.github.io/bsc.log/ccm.log.js", 
  ["ccm.get", "https://mnutze.github.io/bsc.log/resources/configs.js", "monitoring.COMPONENT_TYPE" ] ], 
```

- fork: https://mnutze.github.io/bsc.log/ccm.log.js
- configs: https://mnutze.github.io/bsc.log/resources/configs.js