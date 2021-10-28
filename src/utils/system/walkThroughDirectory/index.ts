// libs
import walk from 'klaw';

/**
 * walkThroughDirectory
 * @description Walk through directory
 * @param directoryPath
 * @return filePaths - file paths
 * @return errors - error on reading file process
 */
export function walkThroughDirectory(directoryPath: string) {
  return new Promise<{
    filePaths: string[];
    errors: string[] | null;
  }>((resolve) => {
    const filePaths: string[] = [];
    let errors: string[] | null = null;

    walk(directoryPath)
      .on('data', (item: { path: string }) => {
        filePaths.push(item.path);
      })
      .on('error', (err: { message: string }) => {
        errors = [...(errors || []), err.message];
      })
      .on('end', () => {
        // Remove first filePath(this Directory Path)
        filePaths.shift();
        resolve({
          filePaths,
          errors,
        });
      });
  });
}
