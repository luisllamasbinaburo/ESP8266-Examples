> Códigos de ejemplo de los tutoriales de www.luisllamas.es
>
> Enlace entrada: https://www.luisllamas.es/como-convertir-codigo-del-esp8266-al-esp32/
>
> Todo el contenido distribuido bajo licencia CCC, salvo indicación expresa

## Librerías WiFi
```cpp
#if defined(ESP8266)
    #define HARDWARE "ESP8266"
    #include "ESP8266WiFi.h"

#elif defined(ESP32)
    #define HARDWARE "ESP32"
    #include "WiFi.h"

#endif
```


