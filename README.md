**🚀Run the UserApp🚀**

To run correctly the proyect you need:

    1. Clone userGridBackend proyect.
      1.  Install gitbash.
      2. Open gitbash console on new directory named as you prefer.
      3. run the command 'git clone https://github.com/aguss-p/userGridBackend.git'


    2. Generate the mongoDB database.
        1. Install MongoDB.
        2.  Configure MongoDB
        3.  On Windows, MongoDB is installed at C:\Program Files\MongoDB by default. Add C:\Program Files\MongoDB\Server\ [version_number] \bin to the PATH environment variable.
        4.  Download the MongoDB Shell and choose a directory to extract it to. Add the resulting path for mongosh.exe to the PATH environment variable.
        5.  Choose a directory on the development machine for storing the data (C:\UsersData). Create the directory if it doesn't exist. The mongo Shell doesn't create new         directories.
        6.  In the OS command shell (not the MongoDB Shell), use the following command to connect to MongoDB on default port 27017. Replace [data_directory_path] with the directory        chosen in the previous step.
            Command: `mongod --dbpath <data_directory_path>`
        7.  Generate data using mongosh
        8.  Open a MongoDB command shell instance by launching mongosh.exe.
        9.  In the command shell connect to the default test database by running the following command: `mongosh`
        10.  Run the following command in the command shell:: `use UserStore`
            (A database named BookStore is created if it doesn't already exist. If the database does exist, its connection is opened for transactions.)
        11.  Create a Users collection using following command: `db.createCollection('Users')`
        12.  Insert fake data using the same schema using following command:
    `db.Users.insertMany([{ "username": "Dumbo", "gmail": "Dumbo@gmail.com", "telefono": "+541142062399"},{ "username": "GatoConBotas", "gmail":"GatoConBotas@gmail.com", "telefono": "+543446426770"},{ "username": "Katarina", "gmail": "Katarina@gmail.com", "telefono": "+543461420431"},{ "username": "Reyna", "gmail": "Reyna@gmail.com", "telefono": "+543414250767"},{ "username": "Sage", "gmail": "Sage@gmail.com", "telefono": "+542374811709"},{ "username": "Fiddlestick", "gmail": "Fiddlestick@gmail.com", "telefono": "+542362420654"},{ "username": "Bardo", "gmail": "Bardo@gmail.com", "telefono": "+541142430031"},{ "username": "Sulivan", "gmail": "Sulivan@gmail.com", "telefono": "+543446426351"},{ "username": "Mike", "gmail": "Mike@gmail.com", "telefono": "+541146252172"},{ "username": "Timmy", "gmail": "Timmy@gmail.com", "telefono": "+543414563537"},{ "username": "Coco", "gmail": "Coco@gmail.com", "telefono": "+541147970853"},{ "username": "AmongSQL", "gmail": "AmongSQL@gmail.com", "telefono": "+541146288622"},{ "username": "Mongo", "gmail": "Mongo@gmail.com", "telefono": "2214963116"},{ "username": "CleanCode", "gmail": "CleanCode@gmail.com", "telefono": "+541142650923"},{ "username": "JimCarrey", "gmail": "JimCarrey@gmail.com", "telefono": "+543424740627"},{ "username": "Toreto", "gmail": "Toreto@gmail.com", "telefono": "+541147694877"},])`

    3. Run backend proyect with IIS Express.
      1. Open userGridBackend proyect with Visual Studio.
      2. Complile the proyect with IIS Express option.
    4. Run frontend proyect.
      1.  Open userGridFrontend proyect with Visual Studio Code.
      2.  Open the terminal on Visual Studio Code and run the command: `npm install`
      (it will install all the dependencies)
      3.  On the same terminal run the command: `npm run clean`
      (it will clean the cache)
      4.  On the same terminal run the command: `npm start`
      (it will generate the new cache and run the proyect)
