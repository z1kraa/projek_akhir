import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopData from '../TopData.json';

export default function MovieDetail() {
    const { id } = useParams(); // Ambil parameter `id` dari URL
    const movie = TopData.find((movie) => movie.id.toString() === id); // Cari film berdasarkan `id`
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [userName, setUserName] = useState('');
    const [rating, setRating] = useState(1); // Rating awal 1
    const [editIndex, setEditIndex] = useState(null);


    
    // Ambil komentar dari local storage saat komponen di-mount
    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    // Simpan komentar ke local storage setiap kali daftar komentar berubah
    useEffect(() => {
        localStorage.setItem(`comments-${id}`, JSON.stringify(comments));
    }, [comments, id]);

    // Tambah komentar baru
    const handleAddComment = () => {
        if (newComment.trim() === '' || userName.trim() === '') return;
        if (editIndex !== null) {
            // Edit komentar
            const updatedComments = [...comments];
            updatedComments[editIndex] = { userName, newComment, rating };
            setComments(updatedComments);
            setEditIndex(null);
        } else {
            // Tambah komentar baru
            setComments([...comments, { userName, newComment, rating }]);
        }               
        setUserName('');
        setNewComment('');
        setRating(1); // Reset rating setelah menambah komentar
    };

    // Hapus komentar
    const handleDeleteComment = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };

    // Edit komentar
    const handleEditComment = (index) => {
        setUserName(comments[index].userName);
        setNewComment(comments[index].newComment);
        setRating(comments[index].rating);
        setEditIndex(index);
    };

    // Jika film tidak ditemukan
    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div data-theme="dark" className="flex flex-col w-full items-center justify-center ">

            <div className="w-[50%] p-10 flex flex-col items-center">
            <img src={movie.img} alt={movie.title} className="rounded-lg w-[300px]" />
            <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
            <p className="mt-2">{movie.description}</p>
            <span className="mt-2 text-sm text-gray-500">Komentar: {movie.rating}</span>

            {/* Form Komentar */}
            <div className="mt-8  w-[]">
                <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="input input-bordered w-full mb-2"
                    placeholder="Your Name"
                />
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="textarea textarea-bordered w-full"
                    placeholder="Write your comment..."
                ></textarea>

                {/* Rating Komentar */}
                <div className="my-2">
                    <label className="mr-2">Rating:</label>
                    <select
                        value={rating}
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="select select-bordered"
                    >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                    </select>
                </div>

                <button onClick={handleAddComment} className="btn btn-primary mt-2">
                    {editIndex !== null ? 'Update Comment' : 'Add Comment'}
                </button>
            </div>

            {/* Daftar Komentar */}
            <div className="mt-6 w-full max-w-md">
                {comments.length === 0 ? (
                    <p className="text-gray-400">No comments yet.</p>
                ) : (
                    comments.map((comment, index) => (
                        <div
                            key={index}
                            // bground koment //
                            className="flex justify-between items-center bg-gray-700 p-2 rounded mb-2"
                        >
                            <div className="flex flex-col">
                                <p className="font-semibold">{comment.userName}</p>
                                <p>{comment.newComment}</p>
                                <p className="text-slate-400">Rating: {comment.rating}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEditComment(index)}
                                    className="btn btn-sm btn-secondary"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteComment(index)}
                                    className="btn btn-sm btn-error"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            </div>

        </div>
    );
}
