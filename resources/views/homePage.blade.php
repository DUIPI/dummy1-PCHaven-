<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite('./resources/css/app.css')
    <title>Home</title>
    
</head>
<body>

    @auth
    <!--Posting --->
        <p>Сайн уу, {{Auth()->user()->name}}</p>
        <form action="/logout" method="POST">
            @csrf
            <button>Гарах</button>
        </form>

        <div class=" bg-slate-200">
            <h2>Нийтлэх</h2>
            <form action="/create-post" method="POST">
                @csrf
                <input type="text" name="title" placeholder="Гарчиг оруулна уу."><br>
                <textarea name="article" placeholder="Тайлбар оруулна уу."></textarea><br>
                <button>Нийтлэх</button>
            </form>
        </div>

    <!--Posts --->

        <div style="border: 1px solid grey;">
            <h1>Нийтлэлүүд</h1>
            @foreach($posts as $post)
                <div style="background-color: skyblue; padding: 10px; margin: 10px;" >
                    <h3>{{$post->user->name}}: {{$post['title']}}</h3>
                    {{$post['article']}}
                    <p><a href="/edit-post/{{$post->id}}">Засах</a></p>
                    <form action="/delete-post/{{$post->id}}" method="POST">
                        @csrf
                        @method('DELETE')
                        <button>Устгах</button>
                    </form>
                </div>
            @endforeach
        </div>
    @else
        <div style="border: 3px solid grey;">
            <h2>Бүртгүүлэх</h2>
            <form action="/register" method="POST">
                @csrf
                <input name="name" type="text" placeholder="Нэр">
                <input name="email" type="text" placeholder="Email">
                <input name="password" type="password" placeholder="Нууц үг">
                <input type="submit" value="Бүртгүүлэх">
            </form>
        </div>
        <div style="border: 3px solid grey;">
            <h2>Нэвтрэх</h2>
            <form action="/login" method="POST">
                @csrf
                <input name="loginname" type="text" placeholder="Нэр">
                <input name="loginpassword" type="password" placeholder="Нууц үг">
                <input type="submit" value="Нэвтрэх">
            </form>
        </div>
    @endauth

</body>
</html>