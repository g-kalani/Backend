// --- Introduction to Node.js and NPM ---

// Node.js:
// Node.js is a cross-platform, open-source JavaScript runtime environment
// that allows developers to execute JavaScript code outside of a web browser.
// It is primarily used for building server-side applications, networking tools,
// and command-line utilities.

// NPM (Node Package Manager):
// NPM is the default package manager for Node.js. It is the world's largest
// software registry and provides tools for installing, managing, and sharing 
// packages (libraries/modules) of code.

// --- File System (fs) Operations in Node.js ---

// Import the built-in 'fs' (File System) module, which provides methods for 
// interacting with the file system.
const fs = require('fs'); 


// 1. fs.writeFile (Writing/Overwriting a File)
// Asynchronously writes data to a file, replacing the file if it already exists.
fs.writeFile("my_file.txt", "This is the initial content of the file.", function(err) {
    if (err) console.error("[ERROR] writeFile:", err);
    else console.log("[SUCCESS] writeFile: done.");
});


// 2. fs.appendFile (Adding Content to a File)
// Asynchronously appends the given data to a file. If the file does not exist, 
// it is created.
fs.appendFile("my_file.txt", "\nThis content was appended later.", function(err) {
    if (err) console.error("[ERROR] appendFile:", err);
    else console.log("[SUCCESS] appendFile: done.");
});


// 3. fs.rename (Renaming a File)
// Asynchronously renames the old path to the new path.
fs.rename("my_file.txt", "new_name.txt", function(err) {
    if (err) console.error("[ERROR] rename:", err);
    else console.log("[SUCCESS] rename: done.");
});


// 4. fs.copyFile (Copying a File)
// Asynchronously copies a source file to a destination file.
// NOTE: Destination directory must exist.
fs.copyFile("new_name.txt", "./copy_folder/copied_file.txt", function(err) {
    // NOTE: This will likely throw an error unless 'copy_folder' already exists.
    if (err) console.error("[ERROR] copyFile (Did you create /copy_folder?):", err.message);
    else console.log("[SUCCESS] copyFile: done.");
});


// 5. fs.rmdir / fs.rm (Removing a Directory)
// fs.rm is the newer, preferred method for removing files/directories.
// The { recursive: true } option allows removing non-empty directories.
fs.rm("./old_directory", { recursive: true, force: true }, function(err) {
    if (err) console.error("[ERROR] rm directory:", err);
    else console.log("[SUCCESS] Directory removed.");
});


// 6. fs.unlink (Deleting a File)
// Asynchronously deletes the file from the file system.
fs.unlink("new_name.txt", function(err) {
    if (err) console.error("[ERROR] unlink:", err);
    else console.log("[SUCCESS] File removed.");
});

