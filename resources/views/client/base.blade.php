<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
{{--    <title>{{$meta_title}}</title>--}}
{{--    <meta name="description"--}}
{{--          content="{{ $meta_description }}">--}}
{{--    <meta name="keywords" content="{{ $meta_keyword }}">--}}
{{--    <meta property="og:title" content="{{ $og_title }}">--}}
{{--    <meta property="og:description" content="{{ $og_description }}">--}}
{{--    @if($image)--}}
{{--        <meta property="og:image" content={{"/".$image->path."/".$image->title}}>--}}
{{--    @endif--}}
{{--    <meta property="og:url" content="{{ request()->fullUrl() }}">--}}
{{--    <meta property="og:type" content="page">--}}
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>
{{--    @if(app()->getLocale()=="ge")--}}
{{--        <link href="{{ mix('/css/AppGeo.css') }}" rel="stylesheet"/>--}}
{{--    @elseif(app()->getLocale()=="en")--}}
{{--        <link href="{{ mix('/css/AppEng.css') }}" rel="stylesheet"/>--}}
{{--    @endif--}}
    {{--    @dd($page["props"]["page"]["meta_title"])--}}
    @routes
    <script src="{{ mix('/js/app.js') }}" defer></script>
</head>
<body>
<!-- Messenger Chat Plugin Code -->
<div id="fb-root"></div>

<!-- Your Chat Plugin code -->
<div id="fb-customer-chat" class="fb-customerchat">
</div>

<script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "100160159275529");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v12.0'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
@inertia
</body>

</html>
