> Códigos de ejemplo de los tutoriales de www.luisllamas.es
>
> Enlace entrada: https://www.luisllamas.es/guia-de-programacion-del-esp8266-en-entorno-arduino/
>
> Todo el contenido distribuido bajo licencia CCC, salvo indicación expresa


## Designación de los pines
```cpp
digitalWrite(D5, LOW);  // D5, que es igual a GPIO14

digitalWrite(14, LOW);  // GPIO14 directamente
```



## Salidas y entradas digitales (GPIO)
```cpp
pinMode(pin, mode)
```

```cpp
digitalWrite(pin, output)
```

```cpp
digitalRead(pin)
```



## Salidas analógicas (PWM)
```cpp
analogWrite(pin, value)
```

```cpp
analogWriteRange(range)
```

```cpp
analogWriteFreq(frequency)
```

```cpp
analogWrite(pin, 0)
```



## Entradas analógicas (ADC)
```cpp
analogRead(A0)
```

```cpp
ADC_MODE(ADC_VCC)
```



## Interrupciones
```cpp
attachInterrupt(digitalPinToInterrupt(interruptPin), handler, FALLING);
```



## PROGMEM
```cpp
string text1 = F("hello");
string text2 = F("hello");
```

```cpp
const char hello[] PROGMEM = "hello";
string texto1 = FSPTR(hello);
string texto2 = FSPTR(hello);
```



## Puerto serie
```cpp
Serial.swap()
```

```cpp
Serial1.begin(baud)
```



## Bus I2C
```cpp
Wire.begin(SDA, SCL)
```



## Bus SPI
```cpp
SPI.setFrequency(frequency)
```



## Comunicación WiFI
```cpp
ESP8266WiFi Class
```

```cpp
#include <ESP8266WiFi.h>
```


