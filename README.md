# soap_example

NodeJs SOAP example

# Installation

```
npm install
```

# Documentação

Tutorial WSDL: https://www.tutorialspoint.com/wsdl/wsdl_types.htm  
W3C WSDL: https://www.w3.org/TR/2001/NOTE-wsdl-20010315

# WSDL Definitions
``` xml
<definitions>
   <types>
      definition of types, if you have some complex types........
   </types>

   <message>
      definition of a message....
   </message>

   <portType>
      <operation>
         definition of a operation.......  
      </operation>
   </portType>

   <binding>
      definition of a binding....
   </binding>

   <service>
      definition of a service....
   </service>
</definitions>
```

# Message Tags

The ```<message>``` element describes the data being exchanged between the web service providers and the consumers.

- Each Web Service has two messages: input and output.
- The input describes the parameters for the web service and the output describes the return data from the web service.
- Each message contains zero or more ```<part>``` parameters, one for each parameter of the web service function.
- Each ```<part>``` parameter associates with a concrete type defined in the ```<types>``` container element.

``` xml
<message name = "SayHelloRequest"> <!-- Request Definition -->
   <part name = "firstName" type = "xsd:string"/> <!-- Resquest Definition Parameter -->
</message>

<message name = "SayHelloResponse"> <!-- Response Definition -->
   <part name = "greeting" type = "xsd:string"/> <!-- Return function definition -->
</message>
```

# PortType Tag
``` xml
<portType name = "Hello_PortType">
   <operation name = "sayHello">
      <input message = "tns:SayHelloRequest"/>
      <output message = "tns:SayHelloResponse"/>
   </operation>
</portType>
```

#### Options

- The portType element defines a single operation, called sayHello.
- The operation consists of a single input message SayHelloRequest and an
- output message SayHelloResponse.


# Binding Tags

The ```<binding>``` element provides specific details on how a portType operation will actually be transmitted over the wire.

``` xml
<binding name = "Hello_Binding" type = "tns:Hello_PortType">
      <soap:binding style = "rpc"
         transport = "http://schemas.xmlsoap.org/soap/http"/>
      <operation name = "sayHello">
         <soap:operation soapAction = "sayHello"/>
         <input>
            <soap:body
               encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
               namespace = "urn:examples:helloservice"
               use = "encoded"/>
         </input>
		
         <output>
            <soap:body
               encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
               namespace = "urn:examples:helloservice"
               use = "encoded"/>
         </output>
      </operation>
   </binding>
```

#### SOAP Binding
WSDL 1.1 includes built-in extensions for SOAP 1.1. It allows you to specify SOAP specific details including SOAP headers, SOAP encoding styles, and the SOAPAction HTTP header. The SOAP extension elements include the following −

#### Definitions: 
- soap:binding
- soap:operation
- soap:body


### soap:binding

This element indicates that the binding will be made available via SOAP. The style attribute indicates the overall style of the SOAP message format. A style value of rpc specifies an RPC format.

The transport attribute indicates the transport of the SOAP messages. The value http://schemas.xmlsoap.org/soap/http indicates the SOAP HTTP transport, whereas http://schemas.xmlsoap.org/soap/smtp indicates the SOAP SMTP transport.

### soap:operation
This element indicates the binding of a specific operation to a specific SOAP implementation. The soapAction attribute specifies that the SOAPAction HTTP header be used for identifying the service.

### soap:body
This element enables you to specify the details of the input and output messages. In the case of HelloWorld, the body element specifies the SOAP encoding style and the namespace URN associated with the specified service.

# Ports Tags

A ```<port>``` element defines an individual endpoint by specifying a single address for a binding.

``` xml
<wsdl:definitions .... >
   <wsdl:service .... > *
      <wsdl:port name = "nmtoken" binding = "qname"> *
         <-- extensibility element (1) -->
      </wsdl:port>
   </wsdl:service>
</wsdl:definitions>
```

- The port element has two attributes: name and binding .
- The name attribute provides a unique name among all ports defined within the enclosing WSDL document.
- The binding attribute refers to the binding using the linking rules defined by WSDL.
- Binding extensibility elements are used to specify the address information for the port.
- A port MUST NOT specify more than one address.
- A port MUST NOT specify any binding information other than address information.

``` xml
<service name = "Hello_Service">
   <documentation>WSDL File for HelloService</documentation>
   <port binding = "tns:Hello_Binding" name = "Hello_Port">
      <soap:address
         location = "http://www.examples.com/SayHello/">
   </port>
</service>
```

# Service TAG


The ```<service>``` element defines the ports supported by the web service. For each of the supported protocols, there is one port element. The service element is a collection of ports.

- Web service clients can learn the following from the service element −

- - where to access the service,
- - through which port to access the web service, and
- - how the communication messages are defined.

- The service element includes a documentation element to provide human-readable documentation.

``` xml
<service name = "Hello_Service">
   <documentation>WSDL File for HelloService</documentation>
   <port binding = "tns:Hello_Binding" name = "Hello_Port">
      <soap:address
         location = "http://www.examples.com/SayHello/">
   </port>
</service>
```

The binding attributes of port element associate the address of the service with a binding element defined in the web service. In this example, this is Hello_Binding

``` xml
<binding name =" Hello_Binding" type = "tns:Hello_PortType">
   <soap:binding style = "rpc"
      transport = "http://schemas.xmlsoap.org/soap/http"/>
   <operation name = "sayHello">
      <soap:operation soapAction = "sayHello"/>
		
      <input>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:helloservice" use = "encoded"/>
      </input>
			
      <output>
         <soap:body
            encodingStyle = "http://schemas.xmlsoap.org/soap/encoding/"
            namespace = "urn:examples:helloservice" use = "encoded"/>
      </output>
   </operation>
</binding>
``` 
