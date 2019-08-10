# Mediator Design Pattern
In Observer Pattern, the source object will also include the list of 
subscribers and be in charge of notifying. In the Mediator Pattern, we 
will decouple this role from the source. We will create an intermediate 
object which is responsible for recognizing the changes from the sources 
and then notifying the subscribers. 