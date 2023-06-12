import { readFile, writeFile } from "fs";

console.log("Incrementing Pre-Release build number...");

readFile("package.json", function (err, content) {
    if (err) throw err;

    var metadata = JSON.parse(content);
    metadata.appVersion.PreRelease = metadata.appVersion.PreRelease + 1;

    writeFile("package.json", JSON.stringify(metadata), function (err) {
        if (err) throw err;
        
        console.log(
            `Current build number: ${metadata.appVersion.Major}.${metadata.appVersion.Minor}.${metadata.appVersion.Release}.${metadata.appVersion.PreRelease}`
        );
    });
});
