const LibraryService = require('../services/libraryService');
const libraryService = new LibraryService();

// Para crear una libreria
exports.createLibrary = async (req, res, next) => {
  try {
    const { name, location, phone } = req.body;

    if (!name || !location || !phone) {
      return res.status(400).json({
        error: 'Missing required field'
      });
    }

    const libraryData = {
        name,
        location,
        phone
    };

    const savedLibrary = await libraryService.createLibrary(libraryData);

    res.status(201).json(savedLibrary);
  } catch (error) {
    res.status(500).json({ error: 'Error creating library' });
  }
};

// Para mostrar todas las librerías
exports.getAllLibraries = async (req, res, next) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    res.json(libraries);
  } catch (error) {
    res.status(500).json({ error: 'Error getting the libraries' });
  }
};

// Para mostrar una librería por id
exports.getLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const library = await libraryService.getLibrary(id);
    if (library) {
      res.json(library);
    } else {
      res.status(404).json({ error: 'Library not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error getting the library' });
  }
};

// Para actualizar una librería 
exports.updateLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;
    const libraryData = await libraryService.getLibrary(id);
    if (libraryData) {
      libraryData.name = name;
      libraryData.location = location;
    } 

    const updatedLibrary = await libraryService.updateLibrary(libraryData);

    if (updatedLibrary) {
      res.json(updatedLibrary);
    } else {
      res.status(404).json({ error: 'Library not found' });
    }
    
  } catch (error) {
    res.status(500).json({ error: 'Error updating the library' });
  }
};


// Para eliminar una librería de manera lógica
exports.deleteLibrary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const library = await libraryService.getLibrary(id);
    if (library) {
      await libraryService.deleteLibrary(library);
      res.json({ message: 'Library deleted successfully' });
    } else {
      res.status(404).json({ error: 'Library not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the library' });
  }
};