String GetContentType(String filename)
{
  if(filename.endsWith(".htm")) return "text/html";
  else if(filename.endsWith(".html")) return "text/html";
  else if(filename.endsWith(".css")) return "text/css";
  else if(filename.endsWith(".js")) return "application/javascript";
  else if(filename.endsWith(".png")) return "image/png";
  else if(filename.endsWith(".gif")) return "image/gif";
  else if(filename.endsWith(".jpg")) return "image/jpeg";
  else if(filename.endsWith(".ico")) return "image/x-icon";
  else if(filename.endsWith(".xml")) return "text/xml";
  else if(filename.endsWith(".pdf")) return "application/x-pdf";
  else if(filename.endsWith(".zip")) return "application/x-zip";
  else if(filename.endsWith(".gz")) return "application/x-gzip";
  return "text/plain";
}

void ServeFile(String path)
{
   File file = SPIFFS.open(path, "r");
   size_t sent = server.streamFile(file, GetContentType(path));
   file.close();
}

void ServeFile(String path, String contentType)
{
   File file = SPIFFS.open(path, "r");
   size_t sent = server.streamFile(file, contentType);
   file.close();
}

bool HandleFileRead(String path) 
{ 
  if (path.endsWith("/")) path += "index.html";
  Serial.println("handleFileRead: " + path);
  
  if (SPIFFS.exists(path)) 
  {
    ServeFile(path);
    return true;
  }
  Serial.println("\tFile Not Found");
  return false;
}

bool HandleFileReadGzip(String path) 
{ 
  if (path.endsWith("/")) path += "index.html";
  Serial.println("handleFileRead: " + path);
  
  if (SPIFFS.exists(path)) 
  {
    ServeFile(path, GetContentType(path));
    return true;
  }
  else 
  {
	  String pathWithGz = path + ".gz";
	  if (SPIFFS.exists(pathWithGz)) 
	  {
		  ServeFile(pathWithGz, GetContentType(path));
		  return true;
	  }
  }
  Serial.println("\tFile Not Found");
  return false;
}
