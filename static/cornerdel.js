

              cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

              // this function gets called once the user drops the file onto the div
              function handleFileSelect(evt) {
                  evt.stopPropagation();
                  evt.preventDefault();

                  // Get the FileList object that contains the list of files that were dropped
                  const files = evt.dataTransfer.files;

                  // this UI is only built for a single file so just dump the first one
                  file = files[0];
                  const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
                  loadAndViewImage(imageId);
              }

              function handleDragOver(evt) {
                  evt.stopPropagation();
                  evt.preventDefault();
                  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
              }

              // Setup the dnd listeners.
              const dropZone = document.getElementById('mydropzone');
              dropZone.addEventListener('dragover', handleDragOver, false);
              dropZone.addEventListener('drop', handleFileSelect, false);


              cornerstoneWADOImageLoader.configure({
                  beforeSend: function(xhr) {
                      // Add custom headers here (e.g. auth tokens)
                      //xhr.setRequestHeader('x-auth-token', 'my auth token');
                  },
                  useWebWorkers: true,
              });

              let loaded = false;

              function loadAndViewImage(imageId) {
                  const element = document.getElementById('dicomImage');

                  cornerstone.loadImage(imageId).then(function(image) {
                      console.log(image);
                      const viewport = cornerstone.getDefaultViewportForImage(element, image);


                      cornerstone.displayImage(element, image, viewport);
                      if(loaded === false) {
                          cornerstoneTools.mouseInput.enable(element);
                          cornerstoneTools.mouseWheelInput.enable(element);
                          cornerstoneTools.wwwc.activate(element, 1); // ww/wc is the default tool for left mouse button
                          cornerstoneTools.pan.activate(element, 2); // pan is the default tool for middle mouse button
                          cornerstoneTools.zoom.activate(element, 4); // zoom is the default tool for right mouse button
                          cornerstoneTools.zoomWheel.activate(element); // zoom is the default tool for middle mouse wheel


                          loaded = true;
                      }
                    }, function(err) {
                        alert("Seems like uploaded the wrong file");
                    });
                  }
                  cornerstone.events.addEventListener('cornerstoneimageloadprogress', function(event) {
                      const eventData = event.detail;
                      const loadProgress = document.getElementById('loadProgress');
                      loadProgress.textContent = `Image Load Progress: ${eventData.percentComplete}%`;
                  });

                  const element = document.getElementById('dicomImage');
                  cornerstone.enable(element);

                  document.getElementById('file').addEventListener('change', function(e) {
                      // Add the file to the cornerstoneFileImageLoader and get unique
                      // number for that file
                      const file = e.target.files[0];
                      const imageId = cornerstoneWADOImageLoader.wadouri.fileManager.add(file);
                      loadAndViewImage(imageId);
                  });
