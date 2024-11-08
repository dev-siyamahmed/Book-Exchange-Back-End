const wishList = require("../../Models/wishList/wishList");



// Controller for creating a new category
exports.createCategory = async (req, res) => {
  try {
    const { title, cover_image } = req.body;
    const newWishList = await wishList.create({
        title,
        cover_image,
    });
    res.status(201).json(newWishList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for getting all wishlist
exports.getAllWishList = async (req, res) => {
  try {
    const wishlist = await wishList.find();
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCategoryByName = async (req, res) => {
  try {
    const categoryName = req.params.name.toLowerCase();
    const category = await Category.findOne({ category_name: { $regex: new RegExp('^' + categoryName + '$', 'i') } });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller for updating a category by ID
exports.updateCategory = async (req, res) => {
  try {
    const { category_name, category_image } = req.body;
    const updatedCategory = await wishList.findByIdAndUpdate(
      req.params.id,
      { category_name, category_image },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller for deleting a wishlist by ID
exports.deleteWishList = async (req, res) => {
  try {
    const deletedWishList = await wishList.findByIdAndDelete(req.params.id);
    if (!deletedWishList) {
      return res.status(404).json({ message: " wishlist not found" });
    }
    res.status(200).json({ message: "wishlist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
