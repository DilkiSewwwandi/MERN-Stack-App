const User = require('./model');


async function create(req, res) {
    console.log(req.body);
    try {
        const { name,email,rollnumber } = req.body;

        
        const user = new User({
            name,
            email,
            rollnumber
        });

        const savedUser = await user.save();
        res.status(201).json({ comment: savedUser , message: "Successfully created"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create' });
    }
}


// async function getCommentsByBlogId(req, res) {
//     try {
//         const { blogId } = req.params;

//         const blog = await Blog.findOne({ _id: blogId });

//         if (!blog) {
//         return res.status(404).json({ message: 'Blog not found' });
//         }

//         const comments = await Comment.find({ blogId });

//         res.status(200).json({ comments });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Failed to retrieve comments' });
//     }
// }


module.exports = {
    create
};
