<?php

namespace App\Http\Middleware;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'client/base';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param \Illuminate\Http\Request $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param \Illuminate\Http\Request $request
     * @return array
     */
    public function share(Request $request)
    {
        $path = base_path() . '/resources/lang/'.App::getLocale().'/translations.php';

        if (file_exists($path)){

            $localisations  = require $path;
//            Inertia::share("currentLocale", App::getLocale());
            Inertia::share( "localizations", $localisations);
//        dd($content);
        }
//        $this->settings();
        $locales = config("laravellocalization.supportedLocales");
//        dd($locales);
        $currentRoute = url()->current();

        //Generates urls for language switcher with each locale
        $locale_urls = $this->locale_urls();
        //Generates link for go back button
        $urlPrev = $this->urlPrev();
        return array_merge(parent::share($request), [
            "locales" => $locales,
            "pathname" => $currentRoute,
            "locale_urls" => $locale_urls,
            'urlPrev' => $urlPrev,
            "currentLocale" => App::getLocale(),

        ]);
    }

    /**
     * @return string
     */
    protected function urlPrev()
    {
        //Generates link for go back button
        if (url()->previous() !== route('login') && url()->previous() !== '' && url()->previous() !== url()->current()) {
            return url()->previous();
        } else {
            return "/";
        }
    }

    /**
     * @return array
     */
    protected function locale_urls()
    {
        $locales = config("laravellocalization.supportedLocales");
        $routes = [];
        foreach ($locales as $key => $val) {
            $routes[$key] = get_url($key);
        }

        return $routes;
    }

    protected function settings()
    {
        $gphone = "";
        $gemail = "";
        $gaddress = "";
        $gcity = "";
        $gcountry = "";
        $ginstagram = "";
        $gfacebook = "";

        $settings = Setting::with(['translations'])->get();
        foreach ($settings as $setting) {
            switch ($setting->key) {
                case "phone":
                    $gphone = $setting;
                    break;
                case "email":
                    $gemail = $setting;
                    break;
                case "address":
                    $gaddress = $setting;
                    break;
                case "instagram":
                    $ginstagram = $setting;
                    break;
                case "facebook":
                    $gfacebook = $setting;
                    break;
                case "city":
                    $gcity = $setting;
                    break;
                case "country":
                    $gcountry = $setting;
                    break;
            }
        }

        Inertia::share([
            "gphone" => $gphone,
            "gemail" => $gemail,
            "gaddress" => $gaddress,
            "ginstagram" => $ginstagram,
            "gfacebook" => $gfacebook,
            "gcity" => $gcity,
            "gcountry" => $gcountry
        ]);
    }

}
