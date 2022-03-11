<?php
/**
 *  app/Http/Requests/Admin/ProductRequest.php
 *
 * Date-Time: 10.06.21
 * Time: 15:07
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class SettingRequest
 * @package App\Http\Requests\Admin
 */
class SettingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        // Check if method is get,fields are nullable.
        return [];

    }
}
