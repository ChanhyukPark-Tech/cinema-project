import React, {useState} from 'react'
import Loading from "../../../components/loading/Loading";
import './createProduct.css'
import Header from "../../../components/header/Header";
import axios from "axios";

const initialState = {
    openDt: '',
    RepresentationMovieCode: '',
    nations: '',
    showTm: 0,
    story: '영화 줄거리에 대해 입력해주세요!!',
    watchGradeName: '청불',
    movieNm: '',
    genre: ''
}

function CreateProduct({history}) {
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(false)
    const [movie, setMovie] = useState(initialState)

    const handleUpload = async e => {
        e.preventDefault()
        try {
            const file = e.target.files[0]
            if (!file) return alert("File not exist.")

            if (file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            console.log(formData)

            const res = await axios.post('/api/upload/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            setLoading(true)
            await axios.post('/api/upload/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e => {
        const {name, value} = e.target
        setMovie({...movie, [name]: value})
    }
    //
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if(!images) return alert("No Image Upload")
            console.log({...movie, PosterURL:images.url})
                await axios.post('/api/movie/', {...movie, PosterURL:images.url}, )
            // history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <Header/>
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                {
                    loading ? <div id="file_img"><Loading/></div>

                        : <div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt=""/>
                            <span onClick={handleDestroy}>X</span>
                        </div>
                }

            </div>

            <form onSubmit={handleSubmit}>

                <div className="row">
                    <label htmlFor="movieNm">영화제목</label>
                    <input type="text" name="movieNm" id="movieNm" required
                           value={movie.movieNm} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="genre">장르</label>
                    <input type="text" name="genre" id="genre" required
                           value={movie.genre} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="RepresentationMovieCode">RepresentationMovieCode</label>
                    <input type="text" name="RepresentationMovieCode" id="RepresentationMovieCode" required
                           value={movie.RepresentationMovieCode} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="openDt">openDt</label>
                    <input type="text" name="openDt" id="openDt" required
                           value={movie.openDt} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="nations">nations</label>
                    <input type="text" name="nations" id="nations" required
                           value={movie.nations} onChange={handleChangeInput}/>
                </div>

                <div className="row">
                    <label htmlFor="showTm">showTm</label>
                    <input type="number" name="showTm" id="showTm" required
                           value={movie.showTm} onChange={handleChangeInput}/>
                </div>


                <div className="row">
                    <label htmlFor="watchGradeName">watchGradeName</label>
                    <textarea type="text" name="watchGradeName" id="watchGradeName" required
                              value={movie.watchGradeName} onChange={handleChangeInput}/>
                </div>
                <div className="row">
                    <label htmlFor="story">story</label>
                    <textarea type="text" name="story" id="story" required
                              value={movie.story} rows="5" onChange={handleChangeInput}/>
                </div>


                <button type="submit">{"Create"}</button>
            </form>
        </div>
    )
}

export default CreateProduct