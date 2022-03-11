<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Page;
use App\Models\Slider;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {


        $page = Page::where('key', 'home')->firstOrFail();
        $sliders = Slider::query()->where("status", 1)->with(['file', 'translations']);
//        dd($page->file);
//        dd(App::getLocale());

        return Inertia::render('Home/Home', ["sliders" => $sliders->get(), "page" => $page, "seo" => [
            "title"=>$page->meta_title,
            "description"=>$page->meta_description,
            "keywords"=>$page->meta_keyword,
            "og_title"=>$page->meta_og_title,
            "og_description"=>$page->meta_og_description,
//            "image" => "imgg",
//            "locale" => App::getLocale()
        ]])->withViewData([
            'meta_title' => $page->meta_title,
            'meta_description' => $page->meta_description,
            'meta_keyword' => $page->meta_keyword,
            "image" => $page->file,
            'og_title' => $page->meta_og_title,
            'og_description' => $page->meta_og_description
        ]);

    }

    public function gallery()
    {
        return Inertia::render('Gallery/Gallery');
    }

    public function doctors()
    {
        return Inertia::render('OurDoctors/OurDoctors');
    }

    public function choosefloor()
    {
        return Inertia::render('ChooseFloor/ChooseFloor');
    }


}
