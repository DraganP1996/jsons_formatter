import { exec } from "node:child_process";

export const getPackageLastVersion = (packageName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(`npm show ${packageName} version`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error fetching version: ${error.message}`);
        reject("Error fetching version");
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        reject("Error fetching version");
        return;
      }
      resolve(stdout.trim());
    });
  });
};
