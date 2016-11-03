# 11-TopSpotsAPI

This project is a re-make of a previous project, Top Spots website (Project 06).

I created an API in Visual Studio using C# that returns a JSON array of top spots in the same format as the file given in 06-TopSpots, and modified my Angular factory to call my API instead of reading the JSON file from the file system.

The API returns the JSON in camelCase format (the casing standard for JavaScript) as opposed to NormalCase format (the casing standard for C#).


## Tasks
1. Opened Visual Studio, and created a new Project
2. Selected `Web > ASP.NET Application`
3. In the wizard, selected an Empty ASP.NET Application, and check the Web API checkbox. (Did **not** select the Web API template)
4. Configured the SerializerSettings as shown in class video.
5. Created a Controller class named `TopSpotsController`
6. Created a `TopSpot` class in my Models folder, added the necessary properties of a Top Spot.
7. Created an Action that returns `IEnumerable<TopSpot>`. This Action read and deserialized the JSON file of top spots into a C# object array, then return the array to end the method.
8. Tested my API using Postman
9. Modified my Angular application to call my new API instead of reading from the file system.
