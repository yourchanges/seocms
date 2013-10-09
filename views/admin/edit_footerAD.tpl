<input type="hidden" name="location" value="edit-footerAD" />
{{$breadcrumb := breadcrumb "网站管理" "通用footerAD管理"}}
{{str2html $breadcrumb}}
<div class="alert">
    <button class="close" data-dismiss="alert" type="button">&times;</button>
    <span>{{.Message}}</span>
</div><!-- End .alert -->
{{with .Site}}
<form method="post" class="edit-body form-horizontal">
    <legend>修改通用footerAD</legend>
    <div class="control-group">
        <label class="control-label" for="content">通用footerAD</label>
        <div class="controls">
            <textarea id="content" name="content" palceholder="请输入通用footerAD">{{.Content}}</textarea>
        </div>
    </div><!-- End .control-group -->
    <div class="control-group">
        <div class="controls">
            <button type="submit" class="btn btn-primary">修改footerAD</button>
        </div>
    </div>
</form><!-- End .edit-body -->
{{end}}
