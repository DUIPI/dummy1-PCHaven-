<?php

namespace App\Http\Controllers;

use App\Models\Posts;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //creating a post
    public function createPost(Request $request) {
        $PostFields=$request->validate([
            'title' => 'required',
            'article' => 'required'
        ]);

        $PostFields['title']=strip_tags($PostFields['title']);
        $PostFields['article']=strip_tags($PostFields['article']);
        $PostFields['user_id']=auth()->id();
        Posts::create($PostFields);

        return redirect('/home');
    }

    //editing a post
    public function showEditScreen(Posts $post){
        if(auth()->user()->id !== $post['user_id']){
            return redirect('/home');
        }

        return view('edit-post',['post'=>$post]);

    }

    //saving an edited post
    public function updatePost(Posts $post, Request $request) {
        if(auth()->user()->id !== $post['user_id']){
            return redirect('/home');
        }

        $PostFields=$request->validate([
            'title' => 'required',
            'article' => 'required'
        ]);

        $PostFields['title']=strip_tags($PostFields['title']);
        $PostFields['article']=strip_tags($PostFields['article']);

        $post->update($PostFields);
        return redirect('home');
    }

    //deleting a post
    public function deletePost(Posts $post) {
        if(auth()->user()->id === $post['user_id']){
        $post->delete();
        }

        return redirect('/home');
    }
}
