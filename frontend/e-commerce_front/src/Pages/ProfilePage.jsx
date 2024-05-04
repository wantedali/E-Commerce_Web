import React from 'react'
import './CSS/ProfilePage.css'
export const ProfilePage = () => {
  return (
    <div className='ProfilePage'>
            <link rel="stylesheet" href="style.css" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <div class="container light-style flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-4">
        Account settings
    </h4>
    <div class="card overflow-hidden">
        <div class="row no-gutters row-bordered row-border-light">
            <div class="col-md-3 pt-0">
                <div class="list-group list-group-flush account-settings-links">
                    <a class="list-group-item list-group-item-action active" data-toggle="list"
                        href="#account-general">General</a>
                    <a class="list-group-item list-group-item-action" data-toggle="list"
                        href="#account-change-password">Change password</a>
                </div>
            </div>
            <div class="col-md-9">
                <div class="tab-content">
                    <div class="tab-pane fade active show" id="account-general">
                        <div class="card-body media align-items-center">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="d-block ui-w-80" />
                            <div class="media-body ml-4">
                                <label class="btn btn-outline-primary">
                                    Upload new photo
                                    <input type="file" class="account-settings-fileinput" />
                                </label> &nbsp;
                                <button type="button" class="btn btn-default md-btn-flat">Reset</button>
                                <div class="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                            </div>
                        </div>
                        <hr class="border-light m-0" />
                        <div class="card-body">
                            <div class="form-group">
                                <label class="form-label">Username</label>
                                <input type="text" class="form-control mb-1" value="nmaxwell" />
                            </div>
                            <div class="form-group">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" value="Nelle Maxwell" />
                            </div>
                            <div class="form-group">
                                <label class="form-label">E-mail</label>
                                <input type="text" class="form-control mb-1" value="nmaxwell@mail.com" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="account-change-password">
                        <div class="card-body pb-2">
                            <div class="form-group">
                                <label class="form-label">Current password</label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="form-group">
                                <label class="form-label">New password</label>
                                <input type="password" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label class="form-label">Repeat new password</label>
                                <input type="password" class="form-control" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="account-info">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-right mt-3">
        <button type="button" class="btn btn-primary">Save changes</button>&nbsp;
        <button type="button" class="btn btn-default">Cancel</button>
    </div>
    </div>
    </div>
  )
}
