<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Нийтлэл засах</title>
</head>
<body>
    <h1>Нийтлэл засах</h1>
    <form action="/edit-post/{{$post->id}}" method="POST">
    @csrf
    @method('PUT') <!--Update request-->    
        <input type="text" name="title" value="{{$post->title}}"><br>
        <textarea name="article">{{$post->article}}</textarea><br>
        <button>Хадгалах</button>
    </form>
</body>
</html>