// UDP variables
WiFiUDP UDP;

unsigned int localPort = 8888;
unsigned int remotePort = 8889;
char packetBuffer[UDP_TX_PACKET_MAX_SIZE]; //buffer to hold incoming packet,

void ProcessPacket(String response)
{
   Serial.println(response);
}
