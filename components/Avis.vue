<template>
    <div class="card-box">
        <h4 class="header-title m-b-30">Avis (5)</h4>
        <div>
            <div class="media m-b-20">
                <div class="d-flex mr-3">
                    <a href="#"><img class="media-object rounded-circle thumb-sm" alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">Maxine Kennedy</h5>
                    <p class="font-13 text-muted mb-0"><a href="" class="text-dark">@Michael</a> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.</p></div>
            </div>
            <div class="media m-b-20">
                <div class="d-flex mr-3">
                    <a href="#"><img class="media-object rounded-circle thumb-sm" alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar2.png"></a>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">Doyle Bell</h5>
                    <p class="font-13 text-muted mb-0"><a href="" class="text-dark">@Michael</a> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.</p>
                    
                </div>
            </div>
            <div class="media m-b-20">
                <div class="d-flex mr-3">
                    <a href="#"><img class="media-object rounded-circle thumb-sm" alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">Maxine Kennedy</h5>
                    <p class="font-13 text-muted mb-0">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.</p></div>
            </div>
            <div class="media m-b-20">
                <div class="d-flex mr-3">
                    <a href="#"><img class="media-object rounded-circle thumb-sm" alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar5.png"></a>
                </div>
                <div class="media-body">
                    <h5 class="mt-0">Erick Loper</h5>
                    <p class="font-13 text-muted mb-0"><a href="" class="text-dark">@Maxine</a> Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio.</p></div>
            </div>
            <div class="media m-b-20">
                <div class="d-flex mr-3">
                    <a href="#"><img class="media-object rounded-circle thumb-sm" alt="64x64" src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>
                </div>
                <div class="media-body">
                    <input type="text" class="form-control input-sm" placeholder="Some text value...">
                    <div class="mt-2 text-right">
                        <button type="submit" class="btn btn-sm btn-custom waves-effect waves-light">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Avis"
    }
</script>

<style scoped>
    .card-box {
        padding: 20px;
        border-radius: 3px;
        margin-bottom: 30px;
        background-color: #fff;
    }
    .thumb-sm {
        height: 36px;
        width: 36px;
    }

    .task-detail .task-dates li {
        width: 50%;
        float: left
    }

    .task-detail .task-tags .bootstrap-tagsinput {
        padding: 0;
        border: none
    }

    .task-detail .assign-team a {
        display: inline-block;
        margin: 5px 5px 5px 0
    }

    .task-detail .files-list .file-box {
        display: inline-block;
        vertical-align: middle;
        width: 80px;
        padding: 2px;
        border-radius: 3px;
        -moz-border-radius: 3px;
        background-clip: padding-box
    }

    .task-detail .files-list .file-box img {
        line-height: 70px
    }

    .task-detail .files-list .file-box p {
        width: 100%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }

    .add-new-plus {
        height: 32px;
        text-align: center;
        width: 32px;
        display: block;
        line-height: 32px;
        color: #98a6ad;
        font-weight: 700;
        background-color: #e3eaef;
        border-radius: 50%
    }

    .project-sort-item .form-group {
        margin-right: 30px
    }

    .project-sort-item .form-group:last-of-type {
        margin-right: 0
    }

    .project-box {
        position: relative
    }

    .project-box .badge {
        position: absolute;
        right: 20px
    }

    .project-box h4 {
        text-overflow: ellipsis;
        white-space: nowrap;
        display: block;
        width: 100%;
        overflow: hidden
    }

    .project-box ul li {
        padding-right: 30px
    }

    .project-box .project-members a {
        margin: 0 0 10px -12px;
        display: inline-block;
        border: 3px solid #fff;
        border-radius: 50%;
        -webkit-box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02);
        box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02)
    }

    .project-box .project-members a:first-of-type {
        margin-left: 0
    }

    .company-card .company-logo {
        float: left;
        height: 60px;
        width: 60px;
        border-radius: 3px
    }

    .company-card .company-detail {
        margin: 0 0 50px 75px
    }
    .text-muted {
        color: #98a6ad!important;
    }

    p {
        line-height: 1.6;
        font-size: 14px;
    }

    .bootstrap-tagsinput .label-info {
        background-color: #02c0ce;
        display: inline-block;
        padding: 4px 8px;
        font-size: 13px;
        margin: 3px 1px;
        border-radius: 3px;
    }
</style>
