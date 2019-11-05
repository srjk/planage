(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\nThe app component is root content and this has only one child component as sidebar component which implements\nsidebar and main content.\n-->\n\n<!-- <app-sidebar></app-sidebar> -->\n\n<app-sidebar *ngIf=\"isCookiePresent; else login\"></app-sidebar>\n\n<ng-template #login>\n  <app-login></app-login>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-image\">\n    <div class=\"hero-text\">\n        <h2 class=\"feature-desc\"></h2>\n    </div>\n    <div class=\"container\">\n        <div>\n            <h2 style=\"text-align:center\">Login into Process </h2>\n        </div>\n        <div>\n            <a href=\"http://localhost:8080\" class=\"google btn\"><i class=\"fa fa-google fa-fw\"></i> Login with Google+</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/board/board.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/board/board.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header class=\"board-header\" *ngIf=\"board\" fxLayout=\"column\">-->\n\n<!--    <div class=\"main-navbar\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between\">-->\n<!--        <input contenteditable=\"true\" fxFlex=\"30\" #boardName class=\"board-name\" (keydown)=\"onBoardNameChange(board, $event)\" [value]=\"board. boardName\" />-->\n<!--        <div class=\"border-header-links\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"flex-end\" fxFlex=\"25\">-->\n\n<!--            <button class=\"link-icon invite-member-icon\" *ngIf=\"isInviteMemberLink$ | async\" [matMenuTriggerFor]=\"invitedMenu\" (click)=\"onLoadApplicationUsers()\">+ Invite member</button>-->\n<!--            <button class=\"link-icon group-icon\" [matMenuTriggerFor]=\"subscriberList\">-->\n<!--        <mat-icon>group</mat-icon>-->\n<!--      </button>-->\n\n<!--            <div>-->\n<!--                <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">-->\n<!--          <mat-icon>more_vert</mat-icon>-->\n<!--        </button>-->\n<!--                <mat-menu #menu=\"matMenu\">-->\n<!--                    <button mat-menu-item (click)=\"focusMethod()\">-->\n<!--            <mat-icon>create</mat-icon>-->\n<!--            <span>Edit board</span>-->\n<!--          </button>-->\n\n<!--                    <button mat-menu-item *ngIf=\"!(isInviteMemberLink$ | async)\">-->\n<!--            <mat-icon>person_add</mat-icon>-->\n<!--            <span>Invite members</span>-->\n<!--          </button>-->\n\n<!--                    <button mat-menu-item (click)=\"onDuplicateBoard()\">-->\n<!--            <mat-icon>file_copy</mat-icon>-->\n<!--            <span>Duplicate board</span>-->\n<!--          </button>-->\n<!--                    <button mat-menu-item (click)=\"onImportOpen()\">-->\n<!--            <mat-icon>view_headline</mat-icon>-->\n<!--            <span>Add multiple rows</span>-->\n<!--          </button>-->\n\n<!--                    <button mat-menu-item (click)=\"onSlackEnable()\">-->\n<!--            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">-->\n<!--              <span class=\"iconify\" data-icon=\"mdi-slack\" data-inline=\"false\" data-width=\"30px\" data-height=\"30px\"-->\n<!--                style=\"color: #565656;padding-right: 10px;\"></span>-->\n<!--              <span>Integrate slack</span>-->\n<!--            </div>-->\n<!--          </button>-->\n\n<!--                    <button mat-menu-item (click)=\"onDeleteBoard(board)\">-->\n<!--            <mat-icon>delete_sweep</mat-icon>-->\n<!--            <span>Delete board</span>-->\n<!--          </button>-->\n<!--                </mat-menu>-->\n<!--            </div>-->\n<!--        </div>-->\n<!--    </div>-->\n\n\n<!--    <div>-->\n<!--        <section fxHide fxShow.gt-sm=\"true\" class=\"border-description-bar\">-->\n<!--            <textarea type=\"text\" [value]=\"board.boardDescription\" class=\"border-description\" placeholder=\"Add board description\" (keydown)=\"onBoardDescriptionChange(board, $event)\">-->\n<!--      &lt;!&ndash;    <p contenteditable=\"true\" class=\"border-description\">{{board.boardDescription}}</p>&ndash;&gt;-->\n<!--    </textarea>-->\n<!--        </section>-->\n<!--    </div>-->\n\n<!--    <hr class=\"style-three\">-->\n\n<!--    <div fxLayout=\"row\" class=\"groupHeader\" fxLayoutAlign=\"start center\">-->\n<!--        <h3 style=\"margin-bottom: 0\">Groups</h3>-->\n<!--        <button class=\"addColumnbutton\" mat-icon-button [matMenuTriggerFor]=\"menuColumn\">-->\n<!--      <mat-icon>add_circle</mat-icon>-->\n<!--    </button>-->\n<!--    </div>-->\n<!--    <mat-menu #menuColumn=\"matMenu\">-->\n<!--        <button mat-menu-item (click)=\"onAddStatusColumn()\">-->\n<!--      <mat-icon>text_format</mat-icon>-->\n<!--      <span>Add Column</span>-->\n<!--    </button>-->\n\n<!--        <button mat-menu-item (click)=\"onAddGroup()\">-->\n<!--      <mat-icon>view_stream</mat-icon>-->\n<!--      <span>Add Group</span>-->\n<!--    </button>-->\n<!--    </mat-menu>-->\n\n<!--</header>-->\n\n<!--<main fxLayout=\"column\">-->\n<!--    <app-group *ngFor=\"let group of board?.boardGroups\" [groupId]=\"group.groupId\"></app-group>-->\n<!--</main>-->\n\n\n<!--<mat-menu #invitedMenu=\"matMenu\" class=\"invitemenudiv1\">-->\n<!--    <ngx-spinner name=\"invite\" [fullScreen]=\"false\">-->\n<!--        <p style=\"color: white; margin-top: 40px;\">Loading...</p>-->\n<!--    </ngx-spinner>-->\n\n<!--    <form class=\"example-form\" (click)=\"$event.stopPropagation()\" [formGroup]=\"emailGroup\">-->\n<!--        <mat-form-field class=\"example-full-width\" (click)=\"$event.stopPropagation()\">-->\n\n<!--            <input type=\"email\" placeholder=\"Enter user email\" aria-label=\"Number\" matInput formControlName=\"emailValue\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\" [(ngModel)]=\"subscriberEmail\">-->\n<!--            <mat-error>Please enter a valid email</mat-error>-->\n\n<!--            <mat-autocomplete #auto=\"matAutocomplete\">-->\n<!--                <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.userEmail\">-->\n<!--                    {{option.userEmail}}-->\n<!--                </mat-option>-->\n\n<!--            </mat-autocomplete>-->\n<!--        </mat-form-field>-->\n<!--    </form>-->\n\n<!--    <div class=\"addmemberbutton\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\">-->\n<!--        <button class=\"send-invite\" mat-raised-button color=\"primary\" (click)=\"onSendEmail()\" [disabled]=\"!emailGroup.valid\">-->\n<!--      Send Invitation-->\n<!--    </button>-->\n<!--    </div>-->\n<!--</mat-menu>-->\n\n<!--<mat-menu #subscriberList=\"matMenu\">-->\n<!--    <div *ngFor=\"let subscriber of boardSubscribers\">-->\n<!--        <button mat-menu-item>-->\n<!--      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">-->\n<!--          <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">-->\n<!--        <ngx-avatar size=30 [src]=\"subscriber.subscriberProfile\" class=\"subscriber-avatar\"></ngx-avatar>-->\n<!--        <div-->\n<!--          style=\"background-color: green; border-radius: 5px; height: 10px; width: 10px; bottom: -28px;left: -6px;position: relative;\">-->\n<!--        </div>-->\n\n<!--        <span style=\"padding-left: 5px;\">{{subscriber.subscriberName}}</span>-->\n<!--          </div>-->\n<!--          <div>-->\n<!--        <mat-icon mat-icon-button style=\"padding-left: 10px; font-size: 19px;\">cancel</mat-icon>-->\n<!--          </div>-->\n<!--      </div>-->\n<!--    </button>-->\n<!--    </div>-->\n<!--</mat-menu>-->\n\n<header class=\"board-header\" *ngIf=\"board\" fxLayout=\"column\">\n\n    <div class=\"main-navbar\" fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"space-between\">\n        <input contenteditable=\"true\" fxFlex=\"30\" #boardName class=\"board-name\"\n            (keydown)=\"onBoardNameChange(board, $event)\" [value]=\"board. boardName\" />\n        <div class=\"border-header-links\" fxLayout=\"row\" fxLayoutGap=\"5px\" fxLayoutAlign=\"flex-end\" fxFlex=\"25\">\n\n            <button class=\"link-icon invite-member-icon\" *ngIf=\"isInviteMemberLink$ | async\"\n                [matMenuTriggerFor]=\"invitedMenu\" (click)=\"onLoadApplicationUsers()\">+ Invite member</button>\n            <button class=\"link-icon group-icon\" [matMenuTriggerFor]=\"subscriberList\">\n                <mat-icon>group</mat-icon>\n            </button>\n\n            <div>\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                    <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                    <!-- <button mat-menu-item (click)=\"focusMethod()\">\n                        <mat-icon>create</mat-icon>\n                        <span>Edit board</span>\n                    </button> -->\n\n                    <button mat-menu-item *ngIf=\"!(isInviteMemberLink$ | async)\">\n                        <mat-icon>person_add</mat-icon>\n                        <span>Invite members</span>\n                    </button>\n\n                    <button mat-menu-item (click)=\"onDuplicateBoard()\">\n                        <mat-icon>file_copy</mat-icon>\n                        <span>Duplicate board</span>\n                    </button>\n                    <button mat-menu-item (click)=\"onImportOpen()\">\n                        <mat-icon>view_headline</mat-icon>\n                        <span>Add multiple rows</span>\n                    </button>\n\n                    <button mat-menu-item (click)=\"onSlackEnable()\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                            <span class=\"iconify\" data-icon=\"mdi-slack\" data-inline=\"false\" data-width=\"30px\"\n                                data-height=\"30px\" style=\"color: #565656;padding-right: 10px;\"></span>\n                            <span>Integrate slack</span>\n                        </div>\n                    </button>\n\n                    <button mat-menu-item (click)=\"onDeleteBoard(board)\">\n                        <mat-icon>delete_sweep</mat-icon>\n                        <span>Delete board</span>\n                    </button>\n                </mat-menu>\n            </div>\n        </div>\n    </div>\n\n\n    <div>\n        <section fxHide fxShow.gt-sm=\"true\" class=\"border-description-bar\">\n            <textarea type=\"text\" [value]=\"board.boardDescription\" class=\"border-description\"\n                placeholder=\"Add board description\" (keydown)=\"onBoardDescriptionChange(board, $event)\">\n      <!--    <p contenteditable=\"true\" class=\"border-description\">{{board.boardDescription}}</p>-->\n    </textarea>\n        </section>\n    </div>\n\n    <hr class=\"style-three\">\n\n    <div fxLayout=\"row\" class=\"groupHeader\" fxLayoutAlign=\"start center\">\n        <h3 style=\"margin-bottom: 0\">Groups</h3>\n        <button class=\"addColumnbutton\" mat-icon-button [matMenuTriggerFor]=\"menuColumn\">\n            <mat-icon>add_circle</mat-icon>\n        </button>\n    </div>\n    <mat-menu #menuColumn=\"matMenu\">\n        <button mat-menu-item (click)=\"onAddStatusColumn()\">\n            <mat-icon>text_format</mat-icon>\n            <span>Add Column</span>\n        </button>\n\n        <button mat-menu-item (click)=\"onAddGroup()\">\n            <mat-icon>view_stream</mat-icon>\n            <span>Add Group</span>\n        </button>\n    </mat-menu>\n\n</header>\n\n<main fxLayout=\"column\">\n    <app-group *ngFor=\"let group of board?.boardGroups\" [groupId]=\"group.groupId\" [groups]=\"allGroups\"></app-group>\n</main>\n\n\n<mat-menu #invitedMenu=\"matMenu\" class=\"invitemenudiv1\">\n    <ngx-spinner name=\"invite\" [fullScreen]=\"false\">\n        <p style=\"color: white; margin-top: 40px;\">Loading...</p>\n    </ngx-spinner>\n\n    <form class=\"example-form\" (click)=\"$event.stopPropagation()\" [formGroup]=\"emailGroup\">\n        <mat-form-field class=\"example-full-width\" (click)=\"$event.stopPropagation()\">\n\n            <input type=\"email\" placeholder=\"Enter user email\" aria-label=\"Number\" matInput formControlName=\"emailValue\"\n                [formControl]=\"myControl\" [matAutocomplete]=\"auto\" [(ngModel)]=\"subscriberEmail\">\n            <mat-error>Please enter a valid email</mat-error>\n\n            <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option.userEmail\">\n                    {{option.userEmail}}\n                </mat-option>\n\n            </mat-autocomplete>\n        </mat-form-field>\n    </form>\n\n    <div class=\"addmemberbutton\" fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\">\n        <button class=\"send-invite\" mat-raised-button color=\"primary\" (click)=\"onSendEmail()\"\n            [disabled]=\"!emailGroup.valid\">\n            Send Invitation\n        </button>\n    </div>\n</mat-menu>\n\n<mat-menu #subscriberList=\"matMenu\">\n    <div *ngFor=\"let subscriber of boardSubscribers\">\n        <button mat-menu-item>\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n                    <ngx-avatar size=30 [src]=\"subscriber.subscriberProfile\" class=\"subscriber-avatar\"></ngx-avatar>\n                    <div\n                        style=\"background-color: green; border-radius: 5px; height: 10px; width: 10px; bottom: -28px;left: -6px;position: relative;\">\n                    </div>\n\n                    <span style=\"padding-left: 5px;\">{{subscriber.subscriberName}}</span>\n                </div>\n                <div>\n                    <mat-icon mat-icon-button style=\"padding-left: 10px; font-size: 19px;\"\n                        (click)=\"onRemoveSubscriber(subscriber)\">cancel</mat-icon>\n                </div>\n            </div>\n        </button>\n    </div>\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/create-board-dialog/create-board-dialog.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/create-board-dialog/create-board-dialog.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Open dialogbox to take boardName as input-->\n<h1 mat-dialog-title>+ Create a board</h1>\n<form mat-dialog-content [formGroup]=\"myGroup\">\n    <mat-form-field appearance=\"outline\">\n        <input matInput placeholder=\"Enter board name\" [(ngModel)]=\"boardName\" maxlength=\"20\" formControlName=\"boardName\" [name]=\"boardName\">\n        <mat-error>Enter board name of max-length 20 0f format [a-zA-Z0-9 ]</mat-error>\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" *ngIf=\"isSlackEnable\">\n        <input matInput placeholder=\"Enter slack webhook url\">\n    </mat-form-field>\n    <mat-checkbox (change)=\"onChangeSlackEnableOption($event)\">Add slack for notifications</mat-checkbox>\n</form>\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n    <button mat-button [mat-dialog-close]=\"boardName\" color=\"primary\" [disabled]=\"!myGroup.valid\">Add board</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/dashboard/dashboard.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/dashboard/dashboard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.9)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-fade\">\n    <p style=\"color: white;\">Loading, Please wait...</p>\n</ngx-spinner>\n\n<div *ngIf=\"boardList.length!==0; else noBoardFound\">\n    <div *ngFor=\"let board of boardList\">\n        <mat-card class=\"example-card\">\n            <mat-card-header>\n                <div class=\"container-div\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <ngx-avatar size=40 [name]=\"board.boardName\" class=\"board-avatar\"></ngx-avatar>\n                    <mat-card-title style=\"margin-top: 10px;padding-left: 15px\">{{board.boardName}}</mat-card-title>\n                </div>\n            </mat-card-header>\n            <mat-divider></mat-divider>\n            <mat-card-content style=\"margin-top: 15px; margin-left: 5px;\">\n                Owner: Divyansh Pachauri\n            </mat-card-content>\n            <mat-card-content style=\"margin-left: 5px; margin-bottom: 0;\"> Created At:</mat-card-content>\n            <mat-card-actions fxLayout fxLayoutAlign=\"end\" style=\"margin-right: 8px;\">\n                <button (click)=\"onOpenBoard(board)\" style=\"font-size: 16px;\" mat-button color=\"primary\">view</button>\n            </mat-card-actions>\n        </mat-card>\n    </div>\n</div>\n\n<ng-template #noBoardFound>\n    <h1>Currently, there is no board.</h1>\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/group/group.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/group/group.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card class=\"card\">-->\n<!--  <mat-card-header>-->\n<!--    <mat-icon class=\"groupIcon\" [matMenuTriggerFor]=\"groupMenuIcon\">arrow_drop_down_circle</mat-icon>-->\n<!--    <input id=\"group-name\" type=\"text\" value={{group.groupName}} (keydown)=\"onChangeGroupName($event)\" [ngStyle]=\"{'color': group.groupColor}\">-->\n<!--    <div class=\"group-color-picker\">-->\n<!--      <input #ignoredInput class=\"group-color-picker-input\"-->\n<!--             [colorPicker]=\"color\" [cpIgnoredElements]=\"[ignoredButton, ignoredInput]\" [(cpToggle)]=\"toggle\" [cpDisableInput]=true-->\n<!--             (colorPickerChange)=\"color=$event\" (colorPickerClose)=\"onChangeGroupColor(color)\" [cpHeight]=\"200\" [cpWidth]='auto' />-->\n<!--    </div>-->\n<!--  </mat-card-header>-->\n<!--  <mat-card-content>-->\n<!--    <div class=\"table-container\">-->\n<!--      <table>-->\n<!--        <thead>-->\n<!--        <tr>-->\n<!--          <th *ngFor=\"let column of displayedColumns; let i = index\" [ngClass]=\"{taskHeader: i == 0}\"-->\n<!--              class=\"columnHeader\">-->\n<!--            <div *ngIf=\"i!==0; else firstColumnHeader\" fxLayout=\"row\" fxLayoutAlign=\"center center\"-->\n<!--                 class=\"columnHeader-container\">-->\n<!--              <input class=\"column-name\" type=\"text\" value={{column.columnName}} (keydown)=\"onChangeColumnName(column.columnId, $event)\">-->\n<!--              <mat-icon class=\"columnDeleteIcon\" (click)=\"onDeleteColumn(column)\" *ngIf=\"i!==0\">delete</mat-icon>-->\n<!--            </div>-->\n<!--            <ng-template #firstColumnHeader>-->\n<!--              <input class=\"column-name\" type=\"text\" value={{column.columnName}} />-->\n<!--            </ng-template>-->\n<!--          </th>-->\n<!--        </tr>-->\n<!--        </thead>-->\n<!--        <tbody>-->\n<!--        <tr *ngFor=\"let row of group.groupRows\">-->\n<!--          <ng-container *ngFor=\"let cell of row.rowCells; let j = index\">-->\n<!--            <th *ngIf=\"j==0; else firstColumnRow\" fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"sideHeader\">-->\n<!--              <mat-icon class=\"rowDeleteIcon\" mat-icon-button [matMenuTriggerFor]=\"rowMenuIcon\"-->\n<!--                        [matMenuTriggerData]=\"{currentRow: row}\">arrow_drop_down</mat-icon>-->\n<!--              <input type=\"text\" (keydown)=\"onUpdateRowValue(row.rowId, cell.cellId, $event)\" [value]=\"cell.cellValue\"-->\n<!--                     class=\"row-task-cell\">-->\n<!--            </th>-->\n<!--            <ng-template #firstColumnRow>-->\n<!--              <td>-->\n<!--                <input [attr.id]=\"cell.cellId\" class=\"row-column-cell\" type=\"text\" readonly=\"readonly\"-->\n<!--                       [matMenuTriggerFor]=\"statusMenu\"-->\n<!--                       [matMenuTriggerData]=\"{statusColumnId: cell.cellId, currentRow: row.rowId}\"-->\n<!--                       [value]=\"cell.cellValue.label\" [ngStyle]=\"{-->\n<!--                          'backgroundColor': cell.cellValue.color,-->\n<!--                          'color': 'white',-->\n<!--                          'text-align': 'center',-->\n<!--                          'padding-top':0,'padding-bottom':0}\">-->\n<!--              </td>-->\n<!--            </ng-template>-->\n<!--          </ng-container>-->\n<!--        </tr>-->\n<!--        </tbody>-->\n<!--      </table>-->\n<!--    </div>-->\n<!--  </mat-card-content>-->\n<!--  <input (focusout)=\"onAddRow($event)\" (keydown)=\"onAddRowByEnter($event)\" class=\"addRowInputBox\" type=\"text\"-->\n<!--         placeholder=\"+ Add Row\">-->\n<!--</mat-card>-->\n\n\n<!--<mat-menu #rowMenuIcon=\"matMenu\">-->\n<!--  <ng-template matMenuContent let-row=\"currentRow\">-->\n<!--    <button mat-menu-item [matMenuTriggerFor]=\"subGroupMenu\"-->\n<!--            [matMenuTriggerData]=\"{groupData: this.board.boardGroups, rowData: row}\">-->\n<!--      <span>Move row to another group</span>-->\n<!--    </button>-->\n<!--    <button mat-menu-item (click)=\"onDeleteRow(row)\">-->\n<!--      <span>Delete Row</span>-->\n<!--    </button>-->\n<!--  </ng-template>-->\n<!--</mat-menu>-->\n\n<!--<mat-menu #subGroupMenu=\"matMenu\">-->\n<!--  <ng-template matMenuContent let-boardGroups=\"groupData\" let-currentRow=\"rowData\">-->\n<!--    <button mat-menu-item *ngFor=\"let group of anotherGroups\">-->\n<!--      <span (click)=\"onMoveRow(group,currentRow)\">{{group.groupName}}</span>-->\n<!--    </button>-->\n<!--  </ng-template>-->\n<!--</mat-menu>-->\n\n<!--<mat-menu #groupMenuIcon=\"matMenu\">-->\n<!--  <button mat-menu-item class=\"groupMenubutton\">-->\n<!--    <mat-icon class=\"groupMenuIcon\">arrow_drop_up_circle</mat-icon>-->\n<!--    <span>Collpase this group</span>-->\n<!--  </button>-->\n<!--  <button mat-menu-item #ignoredButton (click)=\"toggle=!toggle\" class=\"groupMenubutton\">-->\n<!--    <mat-icon class=\"groupMenuIcon\">fiber_manual_record</mat-icon>-->\n<!--    <span>Change group color</span>-->\n<!--  </button>-->\n\n<!--  <button mat-menu-item (click)=\"onDeleteGroup(board, group)\" class=\"groupMenubutton\">-->\n<!--    <mat-icon class=\"groupMenuIcon\">delete</mat-icon>-->\n<!--    <span>Delete Group</span>-->\n<!--  </button>-->\n<!--</mat-menu>-->\n\n\n\n<!--<mat-menu #statusMenu=\"matMenu\">-->\n<!--  <div fxLayout=\"row\" fxLayoutAlign=\"end\">-->\n<!--    <mat-icon class=\"close-div\" style=\"cursor: pointer; color: lightgray\">cancel</mat-icon>-->\n<!--  </div>-->\n\n\n<!--  <ng-template class=\"label-list-container\" matMenuContent let-id=\"statusColumnId\" let-rowid=\"currentRow\">-->\n<!--    <div *ngIf=\"labelList.length==0; else currentLabels\"-->\n<!--         style=\"margin: 10px 10px 0 10px;text-align: center;color: lightgray\">-->\n<!--      No Label yet-->\n<!--    </div>-->\n\n<!--    <ng-template #currentLabels>-->\n<!--      <div class=\"label-list-container\">-->\n<!--      <div class=\"label-list \" *ngFor=\"let lab of labelList; let i = index\" fxLayout=\"row\" fxLayoutAlign=\"space-between\"-->\n<!--           style=\"cursor: pointer\">-->\n\n<!--        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"padding-left: 10px;\"-->\n<!--             (click)=\"onSaveData(rowid, id, lab.label, lab.color)\">-->\n<!--          <div id=\"colorId\" class=\"label-color \" [ngStyle]=\"{ 'background-color': lab.color }\"></div>-->\n<!--          <span id=\"labelId\" style=\"padding-left: 8px \">{{ lab.label }}</span>-->\n<!--        </div>-->\n<!--        <mat-icon (click)=\"deleteStatus(i)\" style=\"cursor: pointer; color: red\">delete</mat-icon>-->\n<!--      </div>-->\n<!--      </div>-->\n<!--    </ng-template>-->\n\n<!--  </ng-template>-->\n\n<!--  <div class=\"labelinput\" (click)=\"$event.stopPropagation()\">-->\n<!--    <input type=\"text\" [(ngModel)]=\"label\" placeholder=\"Enter label: \" />-->\n<!--  </div>-->\n\n<!--  <div class=\"input-color\" (click)=\"$event.stopPropagation()\">-->\n<!--    <div id=\"preview\"></div>-->\n<!--    <div>-->\n<!--      <input ejs-colorpicker type=\"color\" id=\"element\" value=\"#ba68c8\" mode=\"Palette\" [columns]=\"colCount\"-->\n<!--             [inline]=\"true\" [modeSwitcher]=\"false\" [showButtons]=\"false\" [presetColors]=\"customColors\"-->\n<!--             (beforeTileRender)=\"tileRender($event)\" (change)=\"onChange($event)\" />-->\n<!--    </div>-->\n<!--  </div>-->\n\n<!--  <div class=\"buttondiv\" fxLayout fxLayoutAlign=\"space-around\" (click)=\"$event.stopPropagation()\">-->\n<!--    <button style=\"height: 30px\" mat-raised-button color=\"primary\" (click)=\"createStatus()\">Create</button>-->\n<!--  </div>-->\n<!--</mat-menu>-->\n\n<mat-card class=\"card\">\n  <mat-card-header>\n    <mat-icon class=\"groupIcon\" [matMenuTriggerFor]=\"groupMenuIcon\">arrow_drop_down_circle</mat-icon>\n\n    <input id=\"group-name\" type=\"text\" value={{group.groupName}} (keydown)=\"onChangeGroupName($event)\"\n      [ngStyle]=\"{'color': group.groupColor}\">\n    <div class=\"group-color-picker\">\n      <input #ignoredInput class=\"group-color-picker-input\" [colorPicker]=\"color\"\n        [cpIgnoredElements]=\"[ignoredButton, ignoredInput]\" [(cpToggle)]=\"toggle\" [cpDisableInput]=true\n        (colorPickerChange)=\"color=$event\" (colorPickerClose)=\"onChangeGroupColor(color)\" [cpHeight]=\"200\"\n        [cpWidth]='auto' />\n    </div>\n  </mat-card-header>\n  <mat-card-content>\n    <div class=\"table-container\">\n      <table>\n        <thead>\n          <tr>\n            <th *ngFor=\"let column of displayedColumns; let i = index\" [ngClass]=\"{taskHeader: i == 0}\"\n              class=\"columnHeader\">\n              <div *ngIf=\"i==0 || i==1; else firstColumnHeader\">\n                <input class=\"column-name\" type=\"text\" value={{column.columnName}} />\n              </div>\n              <ng-template #firstColumnHeader>\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"columnHeader-container\">\n                  <input class=\"column-name\" type=\"text\" value={{column.columnName}}\n                    (keydown)=\"onChangeColumnName(column.columnId, $event)\">\n                  <mat-icon class=\"columnDeleteIcon\" (click)=\"onDeleteColumn(column)\" *ngIf=\"i!==0\">delete</mat-icon>\n                </div>\n              </ng-template>\n            </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of group.groupRows\">\n            <ng-container *ngFor=\"let cell of row.rowCells; let j = index\">\n              <th *ngIf=\"j==0; else personColumnRow\" fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"sideHeader\">\n                <mat-icon class=\"rowDeleteIcon\" mat-icon-button [matMenuTriggerFor]=\"rowMenuIcon\"\n                  [matMenuTriggerData]=\"{currentRow: row}\">arrow_drop_down</mat-icon>\n                <input type=\"text\" (keydown)=\"onUpdateRowValue(row.rowId, cell.cellId, $event)\" [value]=\"cell.cellValue\"\n                  class=\"row-task-cell\">\n              </th>\n              <ng-template #personColumnRow>\n                <ng-container *ngIf=\"j==1; else statusColumnRow\">\n                  <td>\n                    <div [matMenuTriggerFor]=\"subscriberList\"\n                      [matMenuTriggerData]=\"{personCellId: cell.cellId, currentRowId: row.rowId}\"\n                      style=\"width: 80px; height: 27px; border: 1px solid black;\" fxLayout fxLayoutAlign=\"center center\"\n                      class=\"assignee_list\">\n                      <ngx-avatar class=\"assignee\" [size]=\"25\" [src]=\"cell.cellValue\" class=\"person-avatar\"></ngx-avatar>\n                      <mat-icon style=\"font-size: 15px; margin-left: 5px\" class=\"unassign_icon\"\n                        (click)=\"onUnassignTask(row.rowId, cell.cellId)\">remove_circle</mat-icon>\n                    </div>\n                  </td>\n                </ng-container>\n              </ng-template>\n              <ng-template #statusColumnRow>\n                <td>\n                  <input [attr.id]=\"cell.cellId\" class=\"row-column-cell\" type=\"text\" readonly=\"readonly\"\n                    [matMenuTriggerFor]=\"statusMenu\"\n                    [matMenuTriggerData]=\"{statusColumnId: cell.cellId, currentRow: row.rowId}\"\n                    [value]=\"cell.cellValue.label\" [ngStyle]=\"{\n                          'backgroundColor': cell.cellValue.color,\n                          'color': 'white',\n                          'text-align': 'center',\n                          'padding-top':0,'padding-bottom':0}\">\n                </td>\n              </ng-template>\n            </ng-container>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </mat-card-content>\n  <input (focusout)=\"onAddRow($event)\" (keydown)=\"onAddRowByEnter($event)\" class=\"addRowInputBox\" type=\"text\"\n    placeholder=\"+ Add Row\">\n</mat-card>\n\n\n<mat-menu #rowMenuIcon=\"matMenu\">\n  <ng-template matMenuContent let-row=\"currentRow\">\n    <button mat-menu-item [matMenuTriggerFor]=\"subGroupMenu\"\n      [matMenuTriggerData]=\"{groupData: this.displayedGroups, rowData: row}\">\n      <span>Move row to another group</span>\n    </button>\n    <button mat-menu-item>\n      <span>Archive row</span>\n    </button>\n    <button mat-menu-item (click)=\"onDeleteRow(row)\">\n      <span>Delete Row</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #subscriberList=\"matMenu\">\n  <ng-template matMenuContent let-cellId=\"personCellId\" let-rowId=\"currentRowId\">\n    <div *ngFor=\"let subscriber of boardSubscribers\">\n      <button mat-menu-item (click)=\"onAssignTask(cellId, rowId, subscriber.subscriberProfile)\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-around\">\n            <ngx-avatar size=30 [src]=\"subscriber.subscriberProfile\" class=\"subscriber-avatar\"></ngx-avatar>\n            <div\n              style=\"background-color: green; border-radius: 5px; height: 10px; width: 10px; bottom: -28px;left: -6px;position: relative;\">\n            </div>\n            <span style=\"padding-left: 5px;\">{{subscriber.subscriberName}}</span>\n          </div>\n        </div>\n      </button>\n    </div>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #subGroupMenu=\"matMenu\">\n  <ng-template matMenuContent let-groups=\"groupData\" let-currentRow=\"rowData\">\n    <button mat-menu-item *ngFor=\"let group of displayedGroups\">\n      <span (click)=\"onMoveRow(group,currentRow)\">{{group.groupName}}</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #groupMenuIcon=\"matMenu\">\n  <button mat-menu-item #ignoredButton (click)=\"toggle=!toggle\" class=\"groupMenubutton\">\n    <mat-icon class=\"groupMenuIcon\">fiber_manual_record</mat-icon>\n    <span>Change group color</span>\n  </button>\n \n  <button mat-menu-item (click)=\"onDeleteGroup(board, group)\">\n    <mat-icon class=\"groupMenuIcon\">delete</mat-icon>\n    <span>Delete Group</span>\n  </button>\n</mat-menu>\n\n<mat-menu #subBoardMenu=\"matMenu\">\n  <ng-template matMenuContent let-boards=\"allboards\">\n    <button mat-menu-item *ngFor=\"let board of boardList\">\n      <span>{{board.boardName}}</span>\n    </button>\n  </ng-template>\n</mat-menu>\n\n<mat-menu #statusMenu=\"matMenu\">\n  <div fxLayout=\"row\" fxLayoutAlign=\"end\">\n    <mat-icon class=\"close-div\" style=\"cursor: pointer; color: lightgray\">cancel</mat-icon>\n  </div>\n\n\n  <ng-template class=\"label-list-container\" matMenuContent let-id=\"statusColumnId\" let-rowid=\"currentRow\">\n    <div *ngIf=\"labelList.length==0; else currentLabels\"\n      style=\"margin: 10px 10px 0 10px;text-align: center;color: lightgray\">\n      No Label yet\n    </div>\n\n    <ng-template #currentLabels>\n      <div *ngFor=\"let lab of labelList; let i = index\" fxLayout=\"row\" fxLayoutAlign=\"space-between\"\n        style=\"cursor: pointer\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" style=\"padding-left: 10px;\"\n          (click)=\"onSaveData(rowid, id, lab.label, lab.color)\">\n          <div id=\"colorId\" class=\"label-color \" [ngStyle]=\"{ 'background-color': lab.color }\"></div>\n          <span id=\"labelId\" style=\"padding-left: 8px \">{{ lab.label }}</span>\n        </div>\n        <mat-icon (click)=\"deleteStatus(i)\" style=\"cursor: pointer; color: red\">delete</mat-icon>\n      </div>\n    </ng-template>\n\n  </ng-template>\n\n  <div class=\"labelinput\" (click)=\"$event.stopPropagation()\">\n    <input type=\"text\" [(ngModel)]=\"label\" placeholder=\"Enter label: \" />\n  </div>\n\n  <div class=\"input-color\" (click)=\"$event.stopPropagation()\">\n    <div id=\"preview\"></div>\n    <div>\n      <input ejs-colorpicker type=\"color\" id=\"element\" value=\"#ba68c8\" mode=\"Palette\" [columns]=\"colCount\"\n        [inline]=\"true\" [modeSwitcher]=\"false\" [showButtons]=\"false\" [presetColors]=\"customColors\"\n        (beforeTileRender)=\"tileRender($event)\" (change)=\"onChange($event)\" />\n    </div>\n  </div>\n\n  <div class=\"buttondiv\" fxLayout fxLayoutAlign=\"space-around\" (click)=\"$event.stopPropagation()\">\n    <button style=\"height: 30px\" mat-raised-button color=\"primary\" (click)=\"createStatus()\">Create</button>\n  </div>\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Open dialogbox to take boardName as input-->\n<h1 mat-dialog-title>Add Rows to import</h1>\n<div mat-dialog-content>\n    <mat-form-field appearance=\"outline\">\n        <!-- <input matInput [(ngModel)]=\"boardName\" placeholder=\"Enter board name\"> -->\n        <textarea matInput [(ngModel)]=\"excelText\" placeholder=\"Enter text from excel/csv to import mutiple data as rows\" rows=\"10\" cols=\"20\"></textarea>\n    </mat-form-field>\n</div>\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n    <button mat-button [mat-dialog-close]=\"excelText\" color=\"primary\">Add Rows</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/page-not-found/page-not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/page-not-found/page-not-found.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-1\">404</h1>\n<p class=\"h3\">We can not find the page you are requesting</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/sidebar/sidebar.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/sidebar/sidebar.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51,51,51,0.9)\" size=\"medium\" color=\"#fff\" type=\"ball-spin-fade\">\n    <p style=\"color: white;\">Loading, Please wait...</p>\n</ngx-spinner>\n\n<!--\n Mat side navbar code that will contain product logo, link for create board and display all the existing board names.\n-->\n<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n        [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" [opened]=\"(isHandset$ | async) === false\">\n\n        <!--    Sidenav logo header which contains product logo and user profile name and email id-->\n        <div class=\"logoHeader\">\n            <!--      <p>Planage</p>-->\n            <ngx-avatar name=\"{{userName}}\" class=\"user-avatar\"></ngx-avatar>\n            <p class=\"user-name\">{{userName}}</p>\n            <p class=\"user-email\">{{userEmail}}</p>\n        </div>\n\n        <hr class=\"line\">\n\n        <mat-nav-list>\n            <a mat-list-item>\n                <mat-icon>mail</mat-icon>\n                <span>Inbox</span>\n            </a>\n\n            <a mat-list-item [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">\n                <mat-icon>dashboard</mat-icon>\n                <span>Dashboard</span>\n            </a>\n\n            <!-- Link for create board -->\n            <a mat-list-item (click)=\"onCreateBoard()\">\n                <mat-icon>add_circle_outline</mat-icon>\n                <span>Create Board</span>\n            </a>\n\n            <a mat-list-item *ngFor=\"let board of (boards$ | async)\" [routerLink]=\"['/board']\"\n                (click)=\"onOpenBoard(board.boardId)\">\n                <span>{{board.boardName}}</span>\n            </a>\n\n        </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\n            *ngIf=\"isHandset$ | async\">\n            <mat-icon aria-label=\"Side nav toggle icon\" style=\"color: blue\">menu</mat-icon>\n        </button>\n        <!--router outlet to change the view of main content-->\n        <router-outlet *ngIf=\"isUserDetailsLoaded\"></router-outlet>\n\n    </mat-sidenav-content>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/process/slack-dialog/slack-dialog.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/process/slack-dialog/slack-dialog.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Slack Integration to the board</h1>\n<div mat-dialog-content [formGroup]=\"myGroup\">\n    <mat-form-field appearance=\"outline\">\n        <!-- <input matInput [(ngModel)]=\"boardName\" placeholder=\"Enter board name\"> -->\n        <input matInput [(ngModel)]=\"webhook\" placeholder=\"Enter slack webhook url\" formControlName=\"webhook\" />\n    </mat-form-field>\n</div>\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"flex-end\">\n    <button mat-button [mat-dialog-close]=\"webhook\" color=\"primary\" [disabled]=\"!myGroup.valid\">Add Slack</button>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponent", function() { return routingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _process_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./process/dashboard/dashboard.component */ "./src/app/process/dashboard/dashboard.component.ts");
/* harmony import */ var _process_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./process/page-not-found/page-not-found.component */ "./src/app/process/page-not-found/page-not-found.component.ts");
/* harmony import */ var _process_board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./process/board/board.component */ "./src/app/process/board/board.component.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");








const routes = [
    {
        path: 'process-manager-ui',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
    },
    {
        path: 'dashboard',
        component: _process_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: 'board/:id',
        component: _process_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    {
        path: '**',
        component: _process_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
        canActivate: [_services_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponent = [
    _process_board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
    _process_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
    _process_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
];


/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_board_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket/SocketCommunication */ "./src/app/socket/SocketCommunication.ts");
// import { Component, OnInit } from '@angular/core';
// import { BoardService } from './services/board.service';
// import { CookieService } from 'ngx-cookie-service';
// import { SocketCommunication } from './socket/SocketCommunication';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.sass']
// })
// export class AppComponent implements OnInit {
//   private isCookiePresent = false;
//   private socket;
//   constructor(
//       private cookie: CookieService,
//       private service: BoardService,
//       private socketService: SocketCommunication
//   ) {
//     this.socket = this.socketService.getSocket();
//   }
//   ngOnInit(): void {
//     if (this.cookie.check('__planage')) {
//       this.isCookiePresent = true;
//     }
//     // set the user authentication status if cookie is valid, so that route guards can use it,
//     this.service.setUserAuthStatus(this.cookie.check('__planage'));
//   }
// }




let AppComponent = class AppComponent {
    constructor(cookie, service, socketService) {
        this.cookie = cookie;
        this.service = service;
        this.socketService = socketService;
        this.isCookiePresent = false;
        this.socket = this.socketService.getSocket();
    }
    ngOnInit() {
        if (this.cookie.check('__planage_process')) {
            this.isCookiePresent = true;
        }
        // set the user authentication status if cookie is valid, so that route guards can use it,
        this.service.setUserAuthStatus(this.cookie.check('__planage_process'));
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _services_board_service__WEBPACK_IMPORTED_MODULE_2__["BoardService"] },
    { type: _socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_4__["SocketCommunication"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var proflo_process_lib_lib_processManagementBoardApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! proflo-process-lib/lib/processManagementBoardApp */ "./node_modules/proflo-process-lib/lib/processManagementBoardApp.js");
/* harmony import */ var proflo_process_lib_lib_processManagementBoardApp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(proflo_process_lib_lib_processManagementBoardApp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _process_process_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./process/process.module */ "./src/app/process/process.module.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./socket/SocketCommunication */ "./src/app/socket/SocketCommunication.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _process_import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./process/import-from-excel-dialog/import-from-excel-dialog.component */ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _process_slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./process/slack-dialog/slack-dialog.component */ "./src/app/process/slack-dialog/slack-dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _error_handler_http_error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error-handler/http-error.interceptor */ "./src/app/error-handler/http-error.interceptor.ts");
// import { BrowserModule } from "@angular/platform-browser";
// import { isDevMode, NgModule } from "@angular/core";
// import rootReducer from "proflo-process-lib/lib/processManagementBoardApp";
// import { BoardState } from "proflo-process-lib/lib/types";
// import { INITIAL_STATE } from "proflo-process-lib/lib/processManagementBoardApp";
// import { AppRoutingModule, routingComponent } from "./app-routing.module";
// import { AppComponent } from "./app.component";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { MaterialModule } from "./material/material.module";
// import { ProcessModule } from "./process/process.module";
// import {
//   DevToolsExtension,
//   NgRedux,
//   NgReduxModule
// } from "@angular-redux/store";
// import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// import { AvatarModule } from "ngx-avatar";
// import { NgxSpinnerModule } from "ngx-spinner";
// import { SocketCommunication } from "./socket/SocketCommunication";
// import { AuthGuard } from "./services/auth.guard";
// import { LoginComponent } from "./login/login.component";
// import { ImportFromExcelDialogComponent } from "./process/import-from-excel-dialog/import-from-excel-dialog.component";
// import { FlexModule } from "@angular/flex-layout";
// import { ColorPickerModule } from "ngx-color-picker";
// import { SlackDialogComponent } from "./process/slack-dialog/slack-dialog.component";
// import { ToastrModule } from 'ng6-toastr-notifications';
// import {HttpErrorInterceptor} from './error-handler/http-error.interceptor';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     ImportFromExcelDialogComponent,
//     SlackDialogComponent
//   ],
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     AppRoutingModule,
//     MaterialModule,
//     NgReduxModule,
//     ProcessModule,
//     HttpClientModule,
//     AvatarModule,
//     NgxSpinnerModule,
//     FlexModule,
//     ColorPickerModule, ToastrModule.forRoot(),
//   ],
//   providers: [SocketCommunication, AuthGuard,{
//     provide: HTTP_INTERCEPTORS,
//     useClass: HttpErrorInterceptor,
//     multi: true
//   }],
//   bootstrap: [AppComponent]
// })
// export class AppModule {
//   constructor(
//     private ngRedux: NgRedux<BoardState>,
//     private devTools: DevToolsExtension
//   ) {
//     const enhancers = isDevMode() ? [devTools.enhancer()] : [];
//     this.ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
//   }
// }






















let AppModule = class AppModule {
    constructor(ngRedux) {
        this.ngRedux = ngRedux;
        // const enhancers = isDevMode() ? [devTools.enhancer()] : [];
        this.ngRedux.configureStore(proflo_process_lib_lib_processManagementBoardApp__WEBPACK_IMPORTED_MODULE_3___default.a, proflo_process_lib_lib_processManagementBoardApp__WEBPACK_IMPORTED_MODULE_3__["INITIAL_STATE"]);
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_9__["NgRedux"] }
];
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _process_import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_16__["ImportFromExcelDialogComponent"],
            _process_slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SlackDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_9__["NgReduxModule"],
            _process_process_module__WEBPACK_IMPORTED_MODULE_8__["ProcessModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_avatar__WEBPACK_IMPORTED_MODULE_11__["AvatarModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
        ],
        providers: [_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_13__["SocketCommunication"], _services_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"], {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                useClass: _error_handler_http_error_interceptor__WEBPACK_IMPORTED_MODULE_21__["HttpErrorInterceptor"],
                multi: true
            }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/error-handler/http-error.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/error-handler/http-error.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            // window.alert(errorMessage);
            console.log('error occured', errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    }
}


/***/ }),

/***/ "./src/app/initializer/type-initializer.ts":
/*!*************************************************!*\
  !*** ./src/app/initializer/type-initializer.ts ***!
  \*************************************************/
/*! exports provided: boardInitializer, duplicateBoardInitializer, groupInitializer, rowInitializer, subscriberInititalizer, columnInitializer, statusInitializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boardInitializer", function() { return boardInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicateBoardInitializer", function() { return duplicateBoardInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupInitializer", function() { return groupInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rowInitializer", function() { return rowInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscriberInititalizer", function() { return subscriberInititalizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnInitializer", function() { return columnInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusInitializer", function() { return statusInitializer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
// import { Board, Group, Row, Cell, Subscriber, Column, Status, BoardMetadata } from 'proflo-process-lib/lib/types';
// import { v4 as uuid } from 'uuid';

function boardInitializer(boardName, userEmail, userName, subscriber) {
    const board = {};
    board.boardId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    board.boardName = boardName;
    board.boardDescription = '';
    board.boardOwner = userName;
    board.boardOwnerEmail = userEmail;
    board.createdAt = new Date();
    board.slackWebhookUrl = '';
    board.boardColumns = [
        taskColumnInitializer(), personColumnInitializer(), oneTimeColumnInitializer(), oneTimeColumnInitializer(),
        oneTimeColumnInitializer(), oneTimeColumnInitializer(), oneTimeColumnInitializer()
    ];
    board.boardStatusColumn = [];
    board.boardMetadata = boardMetadataInitializer();
    board.boardGroups = [groupInitializer()];
    board.boardSubscribers = [subscriber];
    return board;
}
function duplicateBoardInitializer(board, name, userEmail, userName, subscriber) {
    const duplicateBoard = {};
    duplicateBoard.boardId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    duplicateBoard.boardName = name;
    duplicateBoard.boardDescription = '';
    duplicateBoard.boardOwner = userName;
    duplicateBoard.boardOwnerEmail = userEmail;
    duplicateBoard.createdAt = new Date();
    duplicateBoard.slackWebhookUrl = '';
    duplicateBoard.boardStatusColumn = [];
    duplicateBoard.boardMetadata = boardMetadataInitializer();
    duplicateBoard.boardGroups = [groupInitializer()];
    duplicateBoard.boardSubscribers = [subscriber];
    duplicateBoard.boardColumns = board.boardColumns;
    return duplicateBoard;
}
function groupInitializer(rowArray) {
    const group = {};
    group.groupId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    group.groupName = 'New Group';
    group.groupColor = '#ed0cef';
    group.groupPosition = 0;
    if (rowArray) {
        group.groupRows = rowArray;
    }
    else {
        group.groupRows = [];
    }
    return group;
}
function rowInitializer(columns, name) {
    const row = {};
    row.rowId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    row.rowPosition = 0;
    row.rowCells = [];
    columns.forEach((column) => {
        const cell = cellInitializer();
        cell.columnId = column.columnId;
        row.rowCells.push(cell);
    });
    row.rowCells[0].cellType = 'text';
    row.rowCells[0].cellValue = name;
    row.rowCells[1].cellType = 'text';
    row.rowCells[1].cellValue = '';
    return row;
}
function cellInitializer() {
    const cell = {};
    cell.cellId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    cell.cellType = 'status';
    cell.cellValue = statusInitializer();
    return cell;
}
function subscriberInititalizer(userId, userName, userEmail, userProfile) {
    const subscriber = {};
    subscriber.subscriberId = userId;
    subscriber.subscriberName = userName;
    subscriber.subscriberEmail = userEmail;
    subscriber.subscriberProfile = userProfile;
    subscriber.subscriberStatus = 'online';
    subscriber.isBoardOwner = true;
    return subscriber;
}
function columnInitializer(board) {
    const column = {};
    column.columnId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    column.columnName = 'Status';
    column.columnType = 'status';
    const cellList = [];
    board.boardGroups.forEach((tempGroup) => {
        tempGroup.groupRows.forEach((tempRow) => {
            const cell = {};
            cell.cellId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
            cell.cellType = 'status';
            cell.cellValue = statusInitializer();
            cell.columnId = column.columnId;
            cellList.push(cell);
        });
    });
    return { newColumn: column, cellArray: cellList };
}
function oneTimeColumnInitializer() {
    const column = {};
    column.columnId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    column.columnName = 'Status';
    column.columnType = 'status';
    return column;
}
function taskColumnInitializer() {
    const column = {};
    column.columnId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    column.columnName = 'Task Name';
    column.columnType = 'text';
    return column;
}
function personColumnInitializer() {
    const column = {};
    column.columnId = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
    column.columnName = 'Person';
    column.columnType = 'text';
    return column;
}
function boardMetadataInitializer() {
    const metadata = {};
    metadata.totalNumberOfRows = 0;
    metadata.totalNumberOfGroups = 1;
    metadata.totalNumberOfColumns = 7;
    metadata.createdDuplicateGroups = 0;
    return metadata;
}
function statusInitializer() {
    const status = {};
    status.label = '';
    status.color = '#FFFFFF';
    return status;
}


/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero-image {\n  opacity: 0.7;\n  height: 100vh;\n  background-image: url(https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);\n  background-size: cover;\n  overflow: hidden;\n}\n\n/* style the container */\n\n.container {\n  z-index: -1;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20%;\n  position: relative;\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 30px;\n  padding-right: 30px;\n  margin-right: 20%;\n  margin-left: 20%;\n}\n\n/* style inputs and link buttons */\n\ninput,\n.btn {\n  z-index: 1;\n  width: auto;\n  margin-right: 25%;\n  margin-left: 25%;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  display: inline-block;\n  font-size: 17px;\n  line-height: 20px;\n  align-content: space-around;\n  text-decoration: none;\n}\n\ninput:hover,\n.btn:hover {\n  opacity: 1;\n}\n\n/* add appropriate colors to fb, twitter and google buttons */\n\n.google {\n  z-index: 1;\n  background-color: #dd4b39;\n  opacity: 0.8;\n  color: white;\n  width: 50%;\n}\n\n/* style the submit button */\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  cursor: pointer;\n}\n\ninput[type=submit]:hover {\n  background-color: #45a049;\n}\n\n/* Two-column layout */\n\n.col {\n  float: left;\n  width: 50%;\n  margin: auto;\n  padding: 0 50px;\n  margin-top: 6px;\n}\n\n/* Clear floats after the columns */\n\n.row:after {\n  align-items: center;\n  display: flex;\n  display-justify-content: center;\n  align-content: center;\n  clear: both;\n}\n\n/* hide some text on medium and large screens */\n\n.hide-md-lg {\n  display: none;\n}\n\n/* Responsive layout - when the screen is less than 650px wide, make the two columns stack on top of each other instead of next to each other */\n\n.col {\n  width: 100%;\n  margin-top: 0;\n}\n\n/* hide the vertical line */\n\n.vl {\n  display: none;\n}\n\n/* show the hidden text on small screens */\n\n.hide-md-lg {\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFJQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREdBLHdCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0Esa0NBQUE7O0FBQ0E7O0VBRUUsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBOztFQUVFLFVBQUE7QUNBRjs7QURHQSw2REFBQTs7QUFFQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RGOztBREtBLDRCQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQSxzQkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDRkY7O0FES0EsbUNBQUE7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDRSwrQkFBQTtFQUNGLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBLCtDQUFBOztBQUNBO0VBQ0UsYUFBQTtBQ0ZGOztBRElBLCtJQUFBOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNGRjs7QURJQSwyQkFBQTs7QUFDQTtFQUNFLGFBQUE7QUNERjs7QURHQSwwQ0FBQTs7QUFDQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1pbWFnZVxuICBvcGFjaXR5OiAwLjdcbiAgaGVpZ2h0OiAxMDB2aFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTE3MDQxMi9wZXhlbHMtcGhvdG8tMTE3MDQxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDApXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXJcbiAgb3ZlcmZsb3c6IGhpZGRlblxuXG4vLyogYm94LXNpemluZzogYm9yZGVyLWJveFxuXG4vKiBzdHlsZSB0aGUgY29udGFpbmVyICovXG4uY29udGFpbmVyXG4gIHotaW5kZXg6IC0xXG4gIGRpc3BsYXk6IGZsZXhcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxuICBtYXJnaW4tdG9wOiAyMCVcbiAgcG9zaXRpb246IHJlbGF0aXZlXG4gIGJvcmRlci1yYWRpdXM6IDVweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyXG4gIHBhZGRpbmc6IDMwcHhcbiAgcGFkZGluZy1yaWdodDogMzBweFxuICBtYXJnaW4tcmlnaHQ6IDIwJVxuICBtYXJnaW4tbGVmdDogMjAlXG5cblxuLyogc3R5bGUgaW5wdXRzIGFuZCBsaW5rIGJ1dHRvbnMgKi9cbmlucHV0LFxuLmJ0blxuICB6LWluZGV4OiAxXG4gIHdpZHRoOiBhdXRvXG4gIG1hcmdpbi1yaWdodDogMjUlXG4gIG1hcmdpbi1sZWZ0OiAyNSVcbiAgcGFkZGluZzogMTJweFxuICBib3JkZXI6IG5vbmVcbiAgYm9yZGVyLXJhZGl1czogNHB4XG4gIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICBmb250LXNpemU6IDE3cHhcbiAgbGluZS1oZWlnaHQ6IDIwcHhcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuXG5cbmlucHV0OmhvdmVyLFxuLmJ0bjpob3ZlclxuICBvcGFjaXR5OiAxXG5cblxuLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cblxuLmdvb2dsZVxuICB6LWluZGV4OiAxXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzlcbiAgb3BhY2l0eTogMC44XG4gIGNvbG9yOiB3aGl0ZVxuICB3aWR0aDogNTAlXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cbi8qIHN0eWxlIHRoZSBzdWJtaXQgYnV0dG9uICovXG5pbnB1dFt0eXBlPXN1Ym1pdF1cbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MFxuICBjb2xvcjogd2hpdGVcbiAgY3Vyc29yOiBwb2ludGVyXG5cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDlcblxuXG4vKiBUd28tY29sdW1uIGxheW91dCAqL1xuLmNvbFxuICBmbG9hdDogbGVmdFxuICB3aWR0aDogNTAlXG4gIG1hcmdpbjogYXV0b1xuICBwYWRkaW5nOiAwIDUwcHhcbiAgbWFyZ2luLXRvcDogNnB4XG5cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93OmFmdGVyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgZGlzcGxheTogZmxleFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlclxuICBjbGVhcjogYm90aFxuXG5cbi8qIGhpZGUgc29tZSB0ZXh0IG9uIG1lZGl1bSBhbmQgbGFyZ2Ugc2NyZWVucyAqL1xuLmhpZGUtbWQtbGdcbiAgZGlzcGxheTogbm9uZVxuXG4vKiBSZXNwb25zaXZlIGxheW91dCAtIHdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjUwcHggd2lkZSwgbWFrZSB0aGUgdHdvIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KVxuLmNvbFxuICB3aWR0aDogMTAwJVxuICBtYXJnaW4tdG9wOiAwXG5cbi8qIGhpZGUgdGhlIHZlcnRpY2FsIGxpbmUgKi9cbi52bFxuICBkaXNwbGF5OiBub25lXG5cbi8qIHNob3cgdGhlIGhpZGRlbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbi5oaWRlLW1kLWxnXG4gIGRpc3BsYXk6IGJsb2NrXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG5cbiIsIi5oZXJvLWltYWdlIHtcbiAgb3BhY2l0eTogMC43O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTE3MDQxMi9wZXhlbHMtcGhvdG8tMTE3MDQxMi5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDApO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBzdHlsZSB0aGUgY29udGFpbmVyICovXG4uY29udGFpbmVyIHtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBtYXJnaW4tbGVmdDogMjAlO1xufVxuXG4vKiBzdHlsZSBpbnB1dHMgYW5kIGxpbmsgYnV0dG9ucyAqL1xuaW5wdXQsXG4uYnRuIHtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBtYXJnaW4tbGVmdDogMjUlO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW5wdXQ6aG92ZXIsXG4uYnRuOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogYWRkIGFwcHJvcHJpYXRlIGNvbG9ycyB0byBmYiwgdHdpdHRlciBhbmQgZ29vZ2xlIGJ1dHRvbnMgKi9cbi5nb29nbGUge1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICBvcGFjaXR5OiAwLjg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogc3R5bGUgdGhlIHN1Ym1pdCBidXR0b24gKi9cbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDVhMDQ5O1xufVxuXG4vKiBUd28tY29sdW1uIGxheW91dCAqL1xuLmNvbCB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDAgNTBweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4vKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGNvbHVtbnMgKi9cbi5yb3c6YWZ0ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4vKiBoaWRlIHNvbWUgdGV4dCBvbiBtZWRpdW0gYW5kIGxhcmdlIHNjcmVlbnMgKi9cbi5oaWRlLW1kLWxnIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDY1MHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG4uY29sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi8qIGhpZGUgdGhlIHZlcnRpY2FsIGxpbmUgKi9cbi52bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIHNob3cgdGhlIGhpZGRlbiB0ZXh0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbi5oaWRlLW1kLWxnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
// import { NgModule } from "@angular/core";
// import { MatToolbarModule } from "@angular/material/toolbar";
// import { MatButtonModule } from "@angular/material/button";
// import { MatSidenavModule } from "@angular/material/sidenav";
// import { MatIconModule } from "@angular/material/icon";
// import { MatListModule } from "@angular/material/list";
// import { MatMenuModule } from "@angular/material/menu";
// import { MatExpansionModule } from "@angular/material/expansion";
// import { MatInputModule } from "@angular/material/input";
// import { MatTableModule } from "@angular/material/table";
// import { MatCardModule } from "@angular/material/card";
// import { MatDialogModule } from "@angular/material/dialog";
// import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
// import { MatAutocompleteModule } from "@angular/material/autocomplete";
// import { ReactiveFormsModule, FormsModule } from "@angular/forms";
// import { MatCheckboxModule } from "@angular/material/checkbox";
// import {MatDividerModule} from '@angular/material/divider';

// const MaterialComponents = [
//   MatToolbarModule,
//   MatButtonModule,
//   MatSidenavModule,
//   MatIconModule,
//   MatListModule,
//   MatMenuModule,
//   MatExpansionModule,
//   MatInputModule,
//   MatTableModule,
//   MatCardModule,
//   MatDialogModule,
//   ReactiveFormsModule,
//   FormsModule,
//   MatProgressSpinnerModule,
//   MatAutocompleteModule,
//   MatCheckboxModule, MatDividerModule
// ];
// @NgModule({
//   imports: [MaterialComponents],
//   exports: [MaterialComponents]
// })
// export class MaterialModule {}

















const MaterialComponents = [
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [MaterialComponents],
        exports: [MaterialComponents]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/process/board/board.component.sass":
/*!****************************************************!*\
  !*** ./src/app/process/board/board.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-items {\n  list-style-type: none;\n  text-decoration: none;\n}\n\ninput {\n  border: none !important;\n}\n\n.board-header {\n  padding: 15px 20px 0 20px;\n  position: -webkit-sticky !important;\n  position: sticky !important;\n  z-index: 99 !important;\n  background-color: white;\n}\n\n.board-name {\n  border: none;\n  outline-color: #008cff;\n  font-size: 30px;\n  margin: 3px;\n}\n\n.board-name:focus {\n  box-shadow: none;\n  border: 1px;\n  outline-color: #008cff;\n}\n\n.border-description {\n  margin: 0 0;\n  width: 40%;\n  color: black;\n  border: none;\n}\n\n.border-description:focus {\n  height: 5em;\n  border: #008cff solid 1px;\n  outline-color: #008cff;\n}\n\n.link-icon {\n  background: transparent;\n  border: none;\n  margin: 0 5px;\n  outline: none !important;\n}\n\n.link-icon:hover {\n  cursor: pointer;\n  outline: none !important;\n}\n\n.link-icon invite-member-icon {\n  border-radius: 25px !important;\n}\n\n.groupHeader {\n  margin-left: 30px;\n}\n\n.mat-menu-item {\n  border: none;\n  outline: none;\n}\n\n.mat-icon-button {\n  outline: none;\n  border: none;\n}\n\n.fab-button {\n  position: fixed;\n  right: 16px;\n  bottom: 16px;\n}\n\n.mat-expansion-panel {\n  margin: 50px 30px 10px 30px;\n}\n\n.addColumnIcon {\n  position: fixed;\n  right: 16px;\n}\n\n.invitemenudiv1 {\n  min-width: 500px !important;\n  padding: 24px;\n  min-height: 200px !important;\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 90%;\n  margin: 0 auto;\n  min-height: 150px;\n}\n\n.example-full-width {\n  width: 90%;\n}\n\n.send-invite {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n  width: 90%;\n}\n\n::ng-deep .avatar-container {\n  display: inline-block !important;\n  margin: 0 auto 0 0;\n  width: 40px;\n  position: relative;\n}\n\nhr.style-three {\n  height: 30px;\n  width: 100%;\n  border-style: solid;\n  border-color: lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wcm9jZXNzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUMvR0Y7O0FEaUhBO0VBRUUsdUJBQUE7QUMvR0Y7O0FEaUhBO0VBQ0UseUJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQzlHRjs7QURpSEE7RUFFRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQy9HRjs7QURnSEU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQzlHSjs7QURpSEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDOUdGOztBRGdIRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDOUdKOztBRGdIQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQzdHRjs7QUQ4R0U7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7QUM1R0o7O0FEOEdBO0VBQ0UsOEJBQUE7QUMzR0Y7O0FENkdBO0VBQ0UsaUJBQUE7QUMxR0Y7O0FENEdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUN6R0Y7O0FEMkdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUN4R0Y7O0FEMEdBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDdkdGOztBRHlHQTtFQUNFLDJCQUFBO0FDdEdGOztBRHdHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDckdGOztBRHVHQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDcEdGOztBRHNHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDbkdGOztBRHFHQTtFQUNFLFVBQUE7QUNsR0Y7O0FEb0dBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNqR0Y7O0FEbUdBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ2hHRjs7QURrR0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUMvRkYiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLy8ubmF2LWl0ZW1zXG4vLyAgbGlzdC1zdHlsZS10eXBlOiBub25lXG4vLyAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG4vL1xuLy9pbnB1dFxuLy8gIC8vd2lkdGg6IDUwJSAhaW1wb3J0YW50XG4vLyAgYm9yZGVyOiBub25lICFpbXBvcnRhbnRcbi8vXG4vLy5ib2FyZC1oZWFkZXJcbi8vICBwYWRkaW5nOiAxNXB4IDIwcHggMCAyMHB4XG4vLyAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50XG4vLyAgei1pbmRleDogOTkgIWltcG9ydGFudFxuLy8gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlXG4vLyAgLy93aWR0aDogNTBlbVxuLy9cbi8vXG4vLy5ib2FyZC1uYW1lXG4vLyAgLy9tYXJnaW46IDAgMCAhaW1wb3J0YW50XG4vLyAgYm9yZGVyOiBub25lXG4vLyAgb3V0bGluZS1jb2xvcjogIzAwOGNmZlxuLy8gIGZvbnQtc2l6ZTogMzBweFxuLy8gIG1hcmdpbjogM3B4XG4vLyAgJjpmb2N1c1xuLy8gICAgYm94LXNoYWRvdzogbm9uZVxuLy8gICAgYm9yZGVyOiAxcHhcbi8vICAgIG91dGxpbmUtY29sb3I6ICMwMDhjZmZcbi8vICAgIC8vbWFyZ2luOiAzcHhcbi8vXG4vLy5ib3JkZXItZGVzY3JpcHRpb25cbi8vICBtYXJnaW46IDAgMFxuLy8gIHdpZHRoOiA0MCVcbi8vICBjb2xvcjogYmxhY2tcbi8vICBib3JkZXI6IG5vbmVcbi8vICAvL291dGxpbmU6IG5vbmVcbi8vICAmOmZvY3VzXG4vLyAgICBoZWlnaHQ6IDVlbVxuLy8gICAgYm9yZGVyOiAjMDA4Y2ZmIHNvbGlkIDFweFxuLy8gICAgb3V0bGluZS1jb2xvcjogIzAwOGNmZlxuLy8gICAgLy90ZXh0LWFsaWduOiBpbmhlcml0XG4vLy8vXG4vLy8vLmJvcmRlci1kZXNjcmlwdGlvbi1iYXJcbi8vLy8gIC8vbWFyZ2luOiAyMHB4IDBcbi8vLy8gIGJvcmRlcjogbm9uZVxuLy8vLyAgb3V0bGluZS1jb2xvcjogIzAwOGNmZlxuLy9cbi8vLmxpbmstaWNvblxuLy8gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4vLyAgYm9yZGVyOiBub25lXG4vLyAgbWFyZ2luOiAwIDVweFxuLy8gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxuLy8gICY6aG92ZXJcbi8vICAgIGN1cnNvcjogcG9pbnRlclxuLy8gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50XG4vL1xuLy8ubGluay1pY29uIGludml0ZS1tZW1iZXItaWNvblxuLy8gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudFxuLy8vLyAuYm9hcmQtbWF0LW1lbnUtYnV0dG9uXG4vLy8vICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50XG4vL1xuLy8uZ3JvdXBIZWFkZXJcbi8vICBtYXJnaW4tbGVmdDogMzBweFxuLy8gIC8vbWFyZ2luLWJvdHRvbTogMSVcbi8vXG4vLy5tYXQtbWVudS1pdGVtXG4vLyAgYm9yZGVyOiBub25lXG4vLyAgb3V0bGluZTogbm9uZVxuLy9cbi8vLm1hdC1pY29uLWJ1dHRvblxuLy8gIG91dGxpbmU6IG5vbmVcbi8vICBib3JkZXI6IG5vbmVcbi8vXG4vLy5mYWItYnV0dG9uXG4vLyAgcG9zaXRpb246IGZpeGVkXG4vLyAgcmlnaHQ6IDE2cHhcbi8vICBib3R0b206IDE2cHhcbi8vXG4vLy5tYXQtZXhwYW5zaW9uLXBhbmVsXG4vLyAgbWFyZ2luOiA1MHB4IDMwcHggMTBweCAzMHB4XG4vL1xuLy8uYWRkQ29sdW1uSWNvblxuLy8gIHBvc2l0aW9uOiBmaXhlZFxuLy8gIHJpZ2h0OiAxNnB4XG4vL1xuLy8uaW52aXRlbWVudWRpdjFcbi8vICBtaW4td2lkdGg6IDUwMHB4ICFpbXBvcnRhbnRcbi8vICBwYWRkaW5nOiAyNHB4XG4vLyAgbWluLWhlaWdodDogMjAwcHggIWltcG9ydGFudFxuLy9cbi8vLmV4YW1wbGUtZm9ybVxuLy8gIG1pbi13aWR0aDogMTUwcHhcbi8vICBtYXgtd2lkdGg6IDUwMHB4XG4vLyAgd2lkdGg6IDkwJVxuLy8gIG1hcmdpbjogMCBhdXRvXG4vLyAgbWluLWhlaWdodDogMTUwcHhcbi8vXG4vLy5leGFtcGxlLWZ1bGwtd2lkdGhcbi8vICB3aWR0aDogOTAlXG4vL1xuLy8uc2VuZC1pbnZpdGVcbi8vICBwb3NpdGlvbjogYWJzb2x1dGVcbi8vICBib3R0b206IDUlXG4vLyAgbGVmdDogNSVcbi8vICB3aWR0aDogOTAlXG4vL1xuLy9cbi8vXG4vL2hyLnN0eWxlLXRocmVlXG4vLyAgaGVpZ2h0OiAzMHB4XG4vLyAgd2lkdGg6IDEwMCVcbi8vICBib3JkZXItc3R5bGU6IHNvbGlkXG4vLyAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXlcblxuLm5hdi1pdGVtc1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmVcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXG5cbmlucHV0XG4gIC8vd2lkdGg6IDUwJSAhaW1wb3J0YW50XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50XG5cbi5ib2FyZC1oZWFkZXJcbiAgcGFkZGluZzogMTVweCAyMHB4IDAgMjBweFxuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnRcbiAgei1pbmRleDogOTkgIWltcG9ydGFudFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZVxuLy93aWR0aDogNTBlbVxuXG4uYm9hcmQtbmFtZVxuICAvL21hcmdpbjogMCAwICFpbXBvcnRhbnRcbiAgYm9yZGVyOiBub25lXG4gIG91dGxpbmUtY29sb3I6ICMwMDhjZmZcbiAgZm9udC1zaXplOiAzMHB4XG4gIG1hcmdpbjogM3B4XG4gICY6Zm9jdXNcbiAgICBib3gtc2hhZG93OiBub25lXG4gICAgYm9yZGVyOiAxcHhcbiAgICBvdXRsaW5lLWNvbG9yOiAjMDA4Y2ZmXG4vL21hcmdpbjogM3B4XG5cbi5ib3JkZXItZGVzY3JpcHRpb25cbiAgbWFyZ2luOiAwIDBcbiAgd2lkdGg6IDQwJVxuICBjb2xvcjogYmxhY2tcbiAgYm9yZGVyOiBub25lXG4gIC8vb3V0bGluZTogbm9uZVxuICAmOmZvY3VzXG4gICAgaGVpZ2h0OiA1ZW1cbiAgICBib3JkZXI6ICMwMDhjZmYgc29saWQgMXB4XG4gICAgb3V0bGluZS1jb2xvcjogIzAwOGNmZlxuXG4ubGluay1pY29uXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogbm9uZVxuICBtYXJnaW46IDAgNXB4XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudFxuICAmOmhvdmVyXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50XG5cbi5saW5rLWljb24gaW52aXRlLW1lbWJlci1pY29uXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudFxuXG4uZ3JvdXBIZWFkZXJcbiAgbWFyZ2luLWxlZnQ6IDMwcHhcblxuLm1hdC1tZW51LWl0ZW1cbiAgYm9yZGVyOiBub25lXG4gIG91dGxpbmU6IG5vbmVcblxuLm1hdC1pY29uLWJ1dHRvblxuICBvdXRsaW5lOiBub25lXG4gIGJvcmRlcjogbm9uZVxuXG4uZmFiLWJ1dHRvblxuICBwb3NpdGlvbjogZml4ZWRcbiAgcmlnaHQ6IDE2cHhcbiAgYm90dG9tOiAxNnB4XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsXG4gIG1hcmdpbjogNTBweCAzMHB4IDEwcHggMzBweFxuXG4uYWRkQ29sdW1uSWNvblxuICBwb3NpdGlvbjogZml4ZWRcbiAgcmlnaHQ6IDE2cHhcblxuLmludml0ZW1lbnVkaXYxXG4gIG1pbi13aWR0aDogNTAwcHggIWltcG9ydGFudFxuICBwYWRkaW5nOiAyNHB4XG4gIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnRcblxuLmV4YW1wbGUtZm9ybVxuICBtaW4td2lkdGg6IDE1MHB4XG4gIG1heC13aWR0aDogNTAwcHhcbiAgd2lkdGg6IDkwJVxuICBtYXJnaW46IDAgYXV0b1xuICBtaW4taGVpZ2h0OiAxNTBweFxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoXG4gIHdpZHRoOiA5MCVcblxuLnNlbmQtaW52aXRlXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICBib3R0b206IDUlXG4gIGxlZnQ6IDUlXG4gIHdpZHRoOiA5MCVcblxuOjpuZy1kZWVwIC5hdmF0YXItY29udGFpbmVyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50XG4gIG1hcmdpbjogMCBhdXRvIDAgMFxuICB3aWR0aDogNDBweFxuICBwb3NpdGlvbjogcmVsYXRpdmVcblxuaHIuc3R5bGUtdGhyZWVcbiAgaGVpZ2h0OiAzMHB4XG4gIHdpZHRoOiAxMDAlXG4gIGJvcmRlci1zdHlsZTogc29saWRcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXlcbiIsIi5uYXYtaXRlbXMge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW5wdXQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmJvYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDE1cHggMjBweCAwIDIwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib2FyZC1uYW1lIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lLWNvbG9yOiAjMDA4Y2ZmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbjogM3B4O1xufVxuLmJvYXJkLW5hbWU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweDtcbiAgb3V0bGluZS1jb2xvcjogIzAwOGNmZjtcbn1cblxuLmJvcmRlci1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMCAwO1xuICB3aWR0aDogNDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5ib3JkZXItZGVzY3JpcHRpb246Zm9jdXMge1xuICBoZWlnaHQ6IDVlbTtcbiAgYm9yZGVyOiAjMDA4Y2ZmIHNvbGlkIDFweDtcbiAgb3V0bGluZS1jb2xvcjogIzAwOGNmZjtcbn1cblxuLmxpbmstaWNvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5saW5rLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxpbmstaWNvbiBpbnZpdGUtbWVtYmVyLWljb24ge1xuICBib3JkZXItcmFkaXVzOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91cEhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxNnB4O1xuICBib3R0b206IDE2cHg7XG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgbWFyZ2luOiA1MHB4IDMwcHggMTBweCAzMHB4O1xufVxuXG4uYWRkQ29sdW1uSWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi5pbnZpdGVtZW51ZGl2MSB7XG4gIG1pbi13aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWluLWhlaWdodDogMjAwcHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5zZW5kLWludml0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1JTtcbiAgbGVmdDogNSU7XG4gIHdpZHRoOiA5MCU7XG59XG5cbjo6bmctZGVlcCAuYXZhdGFyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAwIDA7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmhyLnN0eWxlLXRocmVlIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XG59Il19 */"

/***/ }),

/***/ "./src/app/process/board/board.component.ts":
/*!**************************************************!*\
  !*** ./src/app/process/board/board.component.ts ***!
  \**************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! proflo-process-lib/lib/actions */ "./node_modules/proflo-process-lib/lib/actions.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/initializer/type-initializer */ "./src/app/initializer/type-initializer.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../import-from-excel-dialog/import-from-excel-dialog.component */ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.ts");
/* harmony import */ var src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/socket/SocketCommunication */ "./src/app/socket/SocketCommunication.ts");
/* harmony import */ var _slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../slack-dialog/slack-dialog.component */ "./src/app/process/slack-dialog/slack-dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
// import {Component, OnInit, Inject, OnDestroy, ElementRef, ViewChild} from '@angular/core';
// import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
// import { Observable } from "rxjs";
// import { map, shareReplay, startWith } from "rxjs/operators";
// import { NgRedux, select } from "@angular-redux/store";
// import { ActivatedRoute, Router } from "@angular/router";
// import {
//   Board,
//   BoardState,
//   Row,
//   Subscriber
// } from "proflo-process-lib/lib/types";
// import {
//   addBoard,
//   setBoardName,
//   deleteBoard,
//   setBoardDescription,
//   addRow,
//   addGroup,
//   addColumn,
//   setCurrentOpenBoard,
//   deleteRow,
//   deleteColumn,
//   deleteGroup,
//   setGroupName,
//   setGroupColor,
//   addStatus,
//   updateTask,
//   setColumnName,
//   deleteStatus,
//   updateStatus
// } from "proflo-process-lib/lib/actions";
// import {
//   groupInitializer,
//   columnInitializer,
//   duplicateBoardInitializer,
//   rowInitializer
// } from "src/app/initializer/type-initializer";
// import { WebStorageService, SESSION_STORAGE } from "angular-webstorage-service";
// import { NgxSpinnerService } from "ngx-spinner";
// import { BoardService } from "src/app/services/board.service";
// import { FormBuilder, FormControl, Validators } from "@angular/forms";
// import { MatDialog } from "@angular/material/dialog";
// import { ImportFromExcelDialogComponent } from "../import-from-excel-dialog/import-from-excel-dialog.component";
// import { SocketCommunication } from "src/app/socket/SocketCommunication";
// import { SlackDialogComponent } from "../slack-dialog/slack-dialog.component";
// import { ToastrManager } from 'ng6-toastr-notifications';
//
// interface UsersData {
//   userId: string;
//   userName: string;
//   userEmail: string;
// }
//
// @Component({
//   selector: "app-board",
//   templateUrl: "./board.component.html",
//   styleUrls: ["./board.component.sass"]
// })
// export class BoardComponent implements OnInit, OnDestroy {
//
//   constructor(
//     private breakpointObserver: BreakpointObserver,
//     private formBuilder: FormBuilder,
//     private ngRedux: NgRedux<BoardState>,
//     private router: Router,
//     private activatedRoute: ActivatedRoute,
//     private dialog: MatDialog,
//     private service: BoardService,
//     private spinner: NgxSpinnerService,
//     private socketService: SocketCommunication,
//     public toastr: ToastrManager,
//     @Inject(SESSION_STORAGE) private storage: WebStorageService
//   ) {}
//   // ngRedux store board observable
//   @select(state => state.currentOpenBoard) currentBoard$: Observable<Board>;
//
//   public board: Board; // This variable subscribes board$ to reflect any changes in redux store
//   public routeId: string;
//   public userEmail: string;
//   public userName: string;
//   public applicationUsers: UsersData[];
//   public keyword = "name";
//   public suggestedUser: any;
//   public subscriberEmail: any;
//   public currentBoardId: string;
//   public boardSubscribers: Subscriber[];
//   public socket;
//   public myControl = new FormControl();
//   filteredOptions: Observable<UsersData[]>;
//
//   emailGroup = this.formBuilder.group({
//     emailValue: [
//       "",
//       [
//         Validators.required,
//         Validators.email,
//         // tslint:disable-next-line:max-line-length
//         Validators.pattern(
//           '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
//         )
//       ]
//     ]
//   });
//   // This function will observe the current window screen and show/hide the invite member button according to that
//   isInviteMemberLink$: Observable<boolean> = this.breakpointObserver
//     .observe([Breakpoints.Tablet, Breakpoints.Web])
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );
//   @ViewChild('boardName', {static: false}) nameField: ElementRef;
//   focusMethod(): void {
//     console.log('name', this.nameField)
//     this.nameField.nativeElement.focus();
//   }
//   ngOnInit() {
//     this.socket = this.socketService.getSocket();
//
//     this.socket.on("@@proflo-types/SET_BOARD_NAME", action => {
//       this.ngRedux.dispatch(
//         setBoardName(action.payload.boardId, action.payload.boardName)
//       );
//     });
//
//     this.socket.on("@@proflo-types/SET_BOARD_DESCRIPTION", action => {
//       this.ngRedux.dispatch(
//         setBoardDescription(
//           action.payload.boardId,
//           action.payload.boardDescription
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/DELETE_COLUMN", action => {
//       this.ngRedux.dispatch(
//         deleteColumn(action.payload.boardId, action.payload.boardColumnId)
//       );
//     });
//     this.socket.on("@@proflo-types/SET_COLUMN_NAME", action => {
//       this.ngRedux.dispatch(
//         setColumnName(
//           action.payload.boardId,
//           action.payload.boardColumnId,
//           action.payload.columnName
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/ADD_ROW", action => {
//       this.ngRedux.dispatch(
//         addRow(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.row
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/DELETE_ROW", action => {
//       this.ngRedux.dispatch(
//         deleteRow(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.rowId
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/UPDATE_TASK", action => {
//       this.ngRedux.dispatch(
//         updateTask(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.rowId,
//           action.payload.cellId,
//           action.payload.name
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/UPDATE_STATUS", action => {
//       this.ngRedux.dispatch(
//         updateStatus(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.rowId,
//           action.payload.cellId,
//           action.payload.status
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/ADD_GROUP", action => {
//       this.ngRedux.dispatch(
//         addGroup(action.payload.boardId, action.payload.group)
//       );
//     });
//
//     this.socket.on("@@proflo-types/DELETE_GROUP", action => {
//       this.ngRedux.dispatch(
//         deleteGroup(action.payload.boardId, action.payload.groupId)
//       );
//     });
//
//     this.socket.on("@@proflo-types/SET_GROUP_NAME", action => {
//       this.ngRedux.dispatch(
//         setGroupName(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.groupName
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/SET_GROUP_COLOR", action => {
//       this.ngRedux.dispatch(
//         setGroupColor(
//           action.payload.boardId,
//           action.payload.groupId,
//           action.payload.groupColor
//         )
//       );
//     });
//
//     this.socket.on("@@proflo-types/ADD_STATUS", action => {
//       this.ngRedux.dispatch(
//         addStatus(action.payload.boardId, action.payload.status)
//       );
//     });
//
//     this.socket.on("@@proflo-types/DELETE_STATUS", action => {
//       this.ngRedux.dispatch(
//         deleteStatus(action.payload.boardId, action.payload.position)
//       );
//     });
//
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(""),
//       map(value => this._filter(value))
//     );
//
//     this.userEmail = this.storage.get("userInformation").userEmail;
//     this.userName = this.storage.get("userInformation").userName;
//
//     this.activatedRoute.paramMap.subscribe(resultMap => {
//       this.currentBoardId = resultMap.get("id");
//
//       console.log("going for subscription...");
//       this.socket.emit("subscribe", { room: this.currentBoardId });
//
//       this.service.getBoard(this.currentBoardId).subscribe((result: Board) => {
//         // console.log(result);
//         if (result) {
//           this.ngRedux.dispatch(setCurrentOpenBoard(result));
//           this.boardSubscribers = result.boardSubscribers;
//         } else {
//           this.router.navigate(["/pagenotfound"]);
//         }
//       });
//     });
//
//     this.currentBoard$.subscribe((result: Board) => {
//       this.board = result;
//     });
//   }
//
//   ngOnDestroy() {
//     console.log("Destroying and unsubscribing board...");
//     this.socket.emit("unsubscribe", { room: this.board.boardId });
//   }
//
//   private _filter(value?: string): UsersData[] {
//     if (value) {
//       return this.applicationUsers.filter(option =>
//         option.userEmail.toLowerCase().includes(option.userEmail)
//       );
//     }
//   }
//
//   onBoardNameChange(board, $event) {
//     const key = $event.key || $event.keyCode;
//     if (key === "Enter" || key === 13) {
//       if ($event.target.value !== "") {
//         this.ngRedux.dispatch(setBoardName(board.boardId, $event.target.value));
//         this.socket.emit(
//           "@@proflo-types/SET_BOARD_NAME",
//           setBoardName(board.boardId, $event.target.value)
//         );
//       }
//     }
//   }
//
//   onBoardDescriptionChange(board: Board, $event: any) {
//     const key = $event.key || $event.keyCode;
//     if (key === "Enter" || key === 13) {
//       if ($event.target.value !== "") {
//         this.ngRedux.dispatch(
//           setBoardDescription(board.boardId, $event.target.value)
//         );
//         this.socket.emit(
//           "@@proflo-types/SET_BOARD_DESCRIPTION",
//           setBoardDescription(board.boardId, $event.target.value)
//         );
//       }
//     }
//   }
//
//   onDeleteBoard() {
//     this.ngRedux.dispatch(deleteBoard(this.board.boardId));
//     this.socket.emit(
//       "@@proflo-types/DELETE_BOARD",
//       deleteBoard(this.board.boardId)
//     );
//     this.router.navigate(["dashboard"]);
//     this.showSuccess('Board deleted successfully');
//   }
//
//   onAddGroup() {
//     const newGroup = groupInitializer();
//     this.ngRedux.dispatch(addGroup(this.board.boardId, newGroup));
//     this.socket.emit(
//       "@@proflo-types/ADD_GROUP",
//       addGroup(this.board.boardId, newGroup)
//     );
//   }
//
//   onAddStatusColumn() {
//     const newData = columnInitializer(this.board);
//     this.ngRedux.dispatch(addColumn(this.board.boardId, newData));
//     this.socket.emit(
//       "@@proflo-types/ADD_COLUMN",
//       addColumn(this.board.boardId, newData)
//     );
//     this.showSuccess('Column has been added successfully');
//   }
//
//   onDuplicateBoard() {
//     const duplicateBoard = duplicateBoardInitializer(
//       this.board,
//       "copy of " + this.board.boardName,
//       this.userEmail,
//       this.userName
//     );
//     this.ngRedux.dispatch(addBoard(duplicateBoard));
//   }
//
//   onImportOpen(): void {
//     const dialogRef = this.dialog.open(ImportFromExcelDialogComponent, {
//       width: "500px",
//       height: "400px"
//     });
//
//     // Get the board name from dialog input box
//     dialogRef.afterClosed().subscribe((result: string) => {
//       if (result) {
//         console.log('resssssssssult', result.split("\n"));
//         const value = result.split("\n");
//         const rowArray: Row = [];
//         let row: Row;
//         value.forEach((s: string) => {
//           row = rowInitializer(this.board.boardColumns, s);
//           rowArray.push(row);
//         });
//         const ddd = groupInitializer(rowArray);
//         this.ngRedux.dispatch(addGroup(this.board.boardId, ddd));
//       }
//     });
//   }
//
//   onLoadApplicationUsers() {
//     this.spinner.show("invite", {
//       fullScreen: false,
//       type: "ball-scale-multiple",
//       size: "medium"
//     });
//     this.service.getAllUsers().subscribe((result: any) => {
//       this.applicationUsers = result;
//       // load spinner for 2 seconds after data is completely loaded.
//       console.log(this.applicationUsers);
//       setTimeout(() => {
//         /** spinner ends after 2 seconds */
//         this.spinner.hide("invite");
//       }, 1000);
//     });
//   }
//
//   onSendEmail() {
//     const receiverEmail = this.applicationUsers.filter(
//       result => result.userEmail === this.subscriberEmail
//     )[0];
//     let emailDetails = {};
//     if (receiverEmail) {
//       emailDetails = {
//         to: receiverEmail.userEmail,
//         from: this.userEmail,
//         subscriberId: receiverEmail.userId,
//         senderName: this.userName,
//         boardId: this.board.boardId
//       };
//     } else {
//       emailDetails = {
//         to: this.subscriberEmail,
//         from: this.userEmail,
//         subscriberId: null,
//         senderName: this.userName,
//         boardId: this.board.boardId
//       };
//     }
//     console.log(emailDetails);
//     this.service.sendEmail(emailDetails).subscribe(result => {
//       console.log('this is msg from server that email has reached...');
//       this.showSuccess('Email has been sent successfully');
//     });
//   }
//   showSuccess(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
//     this.toastr.successToastr(msg, 'Success!', {
//       position,
//       animate,
//       toastTimeout
//     });
//   }
//
//   showError() {
//     this.toastr.errorToastr('This is error toast.', 'Oops!');
//   }
//
//   showWarning() {
//     this.toastr.warningToastr('This is warning toast.', 'Alert!');
//   }
//   onSlackEnable(): void {
//     const dialogRef = this.dialog.open(SlackDialogComponent, {
//       width: '400px',
//       height: '250px'
//     });
//
//     dialogRef.afterClosed().subscribe((result: string) => {
//       if (result) {
//         // console.log('resssssssssult',  result.split('\n'));
//         // const value =  result.split('\n');
//         // const rowArray: Row = [];
//         // let row: Row;
//         // value.forEach((s: string) => {
//         //   row = rowInitializer(this.board.boardColumns, s);
//         //   rowArray.push(row);
//         // });
//         // const ddd = groupInitializer(rowArray);
//         // this.ngRedux.dispatch(addGroup(this.board.boardId, ddd));
//       }
//     });
//   }
// }

















let BoardComponent = class BoardComponent {
    constructor(breakpointObserver, formBuilder, ngRedux, router, activatedRoute, dialog, service, spinner, socketService, toastr, storage) {
        this.breakpointObserver = breakpointObserver;
        this.formBuilder = formBuilder;
        this.ngRedux = ngRedux;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.service = service;
        this.spinner = spinner;
        this.socketService = socketService;
        this.toastr = toastr;
        this.storage = storage;
        this.keyword = "name";
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControl"]();
        this.emailGroup = this.formBuilder.group({
            emailValue: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].email,
                    // tslint:disable-next-line:max-line-length
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["Validators"].pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')
                ]
            ]
        });
        // This function will observe the current window screen and show/hide the invite member button according to that
        this.isInviteMemberLink$ = this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Tablet, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Web])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    focusMethod() {
        console.log('name', this.nameField);
        this.nameField.nativeElement.focus();
    }
    ngOnInit() {
        this.socket = this.socketService.getSocket();
        this.socket.on("@@proflo-types/SET_BOARD_NAME", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardName"])(action.payload.boardId, action.payload.boardName));
        });
        this.socket.on("@@proflo-types/SET_BOARD_DESCRIPTION", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardDescription"])(action.payload.boardId, action.payload.boardDescription));
        });
        this.socket.on("@@proflo-types/DELETE_COLUMN", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteColumn"])(action.payload.boardId, action.payload.boardColumnId));
        });
        this.socket.on("@@proflo-types/SET_COLUMN_NAME", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setColumnName"])(action.payload.boardId, action.payload.boardColumnId, action.payload.columnName));
        });
        this.socket.on("@@proflo-types/ADD_ROW", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addRow"])(action.payload.boardId, action.payload.groupId, action.payload.row));
        });
        this.socket.on("@@proflo-types/DELETE_ROW", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteRow"])(action.payload.boardId, action.payload.groupId, action.payload.rowId));
        });
        this.socket.on("@@proflo-types/UPDATE_TASK", action => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["updateTask"])(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId, action.payload.name));
        });
        this.socket.on('@@proflo-types/UPDATE_STATUS', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["updateStatus"])(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId, action.payload.status));
        });
        this.socket.on('@@proflo-types/ADD_GROUP', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addGroup"])(action.payload.boardId, action.payload.group));
        });
        this.socket.on('@@proflo-types/DELETE_GROUP', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteGroup"])(action.payload.boardId, action.payload.groupId));
        });
        this.socket.on('@@proflo-types/SET_GROUP_NAME', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setGroupName"])(action.payload.boardId, action.payload.groupId, action.payload.groupName));
        });
        this.socket.on('@@proflo-types/SET_GROUP_COLOR', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setGroupColor"])(action.payload.boardId, action.payload.groupId, action.payload.groupColor));
        });
        this.socket.on('@@proflo-types/ADD_STATUS', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addStatus"])(action.payload.boardId, action.payload.status));
        });
        this.socket.on('@@proflo-types/DELETE_STATUS', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteStatus"])(action.payload.boardId, action.payload.position));
        });
        this.socket.on('@@proflo-types/ASSIGN_TASK', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["assignTask"])(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId, action.payload.profileUrl));
        });
        this.socket.on('@@proflo-types/UNASSIGN_TASK', (action) => {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["unassignTask"])(action.payload.boardId, action.payload.groupId, action.payload.rowId, action.payload.cellId));
        });
        this.socket.on('@@proflo-types/REMOVE_SUBSCRIBER', (action) => {
            console.log('listend for remove subscriber...');
            if (action.payload.subscriberId == this.userId) {
                console.log('matched');
                this.socket.emit('deleteBoard', { boardId: action.payload.boardId, subscriberId: action.payload.subscriberId }, () => {
                    console.log('i am back');
                    this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteBoard"])(action.payload.boardId));
                    this.router.navigate(['/dashboard']);
                });
            }
            else {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["removeSubscriber"])(action.payload.boardId, action.payload.subscriberId));
            }
        });
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(value => this._filter(value)));
        this.userEmail = this.storage.get('userInformation').userEmail;
        this.userName = this.storage.get('userInformation').userName;
        this.userId = this.storage.get('userInformation').userId;
        this.userProfile = this.storage.get('userInformation').userProfile;
        this.activatedRoute.paramMap.subscribe((resultMap) => {
            this.currentBoardId = resultMap.get('id');
            this.socket.emit('subscribe', { room: this.currentBoardId });
            this.service.getBoard(this.currentBoardId, this.userId).subscribe((result) => {
                if (result) {
                    this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setCurrentOpenBoard"])(result));
                    this.boardSubscribers = result.boardSubscribers;
                    this.allGroups = result.boardGroups;
                }
                else {
                    this.router.navigate(['/pagenotfound']);
                }
            }, (error) => {
                this.router.navigate(['/pagenotfound']);
            });
        });
        this.currentBoard$.subscribe((result) => {
            if (result) {
                this.board = result;
                this.boardSubscribers = result.boardSubscribers;
                this.allGroups = result.boardGroups;
            }
        });
    }
    ngOnDestroy() {
        console.log('Destroying and unsubscribing board...');
        console.log('deleted board id: ', this.deletedBoardId);
        this.socket.emit('unsubscribe', { room: this.deletedBoardId });
    }
    _filter(value) {
        if (value) {
            return this.applicationUsers.filter(option => option.userEmail.toLowerCase().includes(option.userEmail));
        }
    }
    onBoardNameChange(board, $event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13) {
            if ($event.target.value !== '') {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardName"])(board.boardId, $event.target.value));
                this.socket.emit('@@proflo-types/SET_BOARD_NAME', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardName"])(board.boardId, $event.target.value), subscriberId: this.userId });
            }
        }
    }
    onBoardDescriptionChange(board, $event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13) {
            if ($event.target.value !== '') {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardDescription"])(board.boardId, $event.target.value));
                this.socket.emit('@@proflo-types/SET_BOARD_DESCRIPTION', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["setBoardDescription"])(board.boardId, $event.target.value), subscriberId: this.userId });
            }
        }
    }
    onDeleteBoard() {
        console.log('deleting board', this.board.boardId);
        this.deletedBoardId = this.board.boardId;
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteBoard"])(this.board.boardId));
        this.socket.emit('@@proflo-types/DELETE_BOARD', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["deleteBoard"])(this.deletedBoardId), subscriberId: this.userId }, () => {
            //First let the board deleted from the user boardlist and wait for acknowledgement from socket delete board
            // than redirect to dashboard.
            this.router.navigate(['dashboard']);
        });
    }
    onAddGroup() {
        const newGroup = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["groupInitializer"])();
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addGroup"])(this.board.boardId, newGroup));
        this.socket.emit('@@proflo-types/ADD_GROUP', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addGroup"])(this.board.boardId, newGroup), subscriberId: this.userId });
    }
    onAddStatusColumn() {
        const newData = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["columnInitializer"])(this.board);
        console.log('on add status column');
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addColumn"])(this.board.boardId, newData));
        this.socket.emit('@@proflo-types/ADD_COLUMN', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addColumn"])(this.board.boardId, newData), subscriberId: this.userId });
    }
    onDuplicateBoard() {
        const owner = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["subscriberInititalizer"])(this.userId, this.userName, this.userEmail, this.userProfile);
        const duplicateBoard = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["duplicateBoardInitializer"])(this.board, 'copy of ' + this.board.boardName, this.userEmail, this.userName, owner);
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addBoard"])(duplicateBoard));
        this.socket.emit('@@proflo-types/ADD_BOARD', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addBoard"])(duplicateBoard), subscriberId: this.userId }, () => {
            console.log('callback came now redirecting');
            // redirect to board component
            this.router.navigate(['/board', duplicateBoard.boardId]);
        });
    }
    onImportOpen() {
        const dialogRef = this.dialog.open(_import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_13__["ImportFromExcelDialogComponent"], {
            width: "500px",
            height: "400px"
        });
        // Get the board name from dialog input box
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                console.log('resssssssssult', result.split("\n"));
                const value = result.split("\n");
                const rowArray = [];
                let row;
                value.forEach((s) => {
                    row = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["rowInitializer"])(this.board.boardColumns, s);
                    rowArray.push(row);
                });
                const ddd = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_7__["groupInitializer"])(rowArray);
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["addGroup"])(this.board.boardId, ddd));
            }
        });
    }
    onLoadApplicationUsers() {
        this.spinner.show("invite", {
            fullScreen: false,
            type: "ball-scale-multiple",
            size: "medium"
        });
        this.service.getAllUsers().subscribe((result) => {
            this.applicationUsers = result;
            // load spinner for 2 seconds after data is completely loaded.
            console.log(this.applicationUsers);
            setTimeout(() => {
                /** spinner ends after 2 seconds */
                this.spinner.hide("invite");
            }, 1000);
        });
    }
    onSendEmail() {
        const receiverEmail = this.applicationUsers.filter(result => result.userEmail === this.subscriberEmail)[0];
        let emailDetails = {};
        if (receiverEmail) {
            emailDetails = {
                to: receiverEmail.userEmail,
                from: this.userEmail,
                subscriberId: receiverEmail.userId,
                senderName: this.userName,
                boardId: this.board.boardId
            };
        }
        else {
            emailDetails = {
                to: this.subscriberEmail,
                from: this.userEmail,
                subscriberId: null,
                senderName: this.userName,
                boardId: this.board.boardId
            };
        }
        console.log(emailDetails);
        this.service.sendEmail(emailDetails).subscribe(result => {
            console.log('this is msg from server that email has reached...');
        });
        this.showSuccess('Email has been sent successfully');
    }
    showSuccess(msg, position = 'bottom-right', animate = 'slideFromRight', toastTimeout = 2000) {
        this.toastr.successToastr(msg, 'Success!', {
            position,
            animate,
            toastTimeout
        });
    }
    showError() {
        this.toastr.errorToastr('This is error toast.', 'Oops!');
    }
    showWarning() {
        this.toastr.warningToastr('This is warning toast.', 'Alert!');
    }
    onSlackEnable() {
        const dialogRef = this.dialog.open(_slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_15__["SlackDialogComponent"], {
            width: '400px',
            height: '250px'
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                // console.log('resssssssssult',  result.split('\n'));
                // const value =  result.split('\n');
                // const rowArray: Row = [];
                // let row: Row;
                // value.forEach((s: string) => {
                //   row = rowInitializer(this.board.boardColumns, s);
                //   rowArray.push(row);
                // });
                // const ddd = groupInitializer(rowArray);
                // this.ngRedux.dispatch(addGroup(this.board.boardId, ddd));
            }
        });
    }
    onRemoveSubscriber(subscriber) {
        console.log('removing subscriber...', subscriber);
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["removeSubscriber"])(this.board.boardId, subscriber.subscriberId));
        // tslint:disable-next-line:max-line-length
        this.socket.emit('@@proflo-types/REMOVE_SUBSCRIBER', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_6__["removeSubscriber"])(this.board.boardId, subscriber.subscriberId), subscriberId: this.userId });
    }
};
BoardComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"] },
    { type: src_app_services_board_service__WEBPACK_IMPORTED_MODULE_10__["BoardService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] },
    { type: src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_14__["SocketCommunication"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_16__["ToastrManager"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["SESSION_STORAGE"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["select"])(state => state.currentOpenBoard)
], BoardComponent.prototype, "currentBoard$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('boardName', { static: false })
], BoardComponent.prototype, "nameField", void 0);
BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-board",
        template: __webpack_require__(/*! raw-loader!./board.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/board/board.component.html"),
        styles: [__webpack_require__(/*! ./board.component.sass */ "./src/app/process/board/board.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["SESSION_STORAGE"]))
], BoardComponent);



/***/ }),

/***/ "./src/app/process/create-board-dialog/create-board-dialog.component.sass":
/*!********************************************************************************!*\
  !*** ./src/app/process/create-board-dialog/create-board-dialog.component.sass ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-actions {\n  justify-content: flex-end;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL2NyZWF0ZS1ib2FyZC1kaWFsb2cvY3JlYXRlLWJvYXJkLWRpYWxvZy5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcHJvY2Vzcy9jcmVhdGUtYm9hcmQtZGlhbG9nL2NyZWF0ZS1ib2FyZC1kaWFsb2cuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy9jcmVhdGUtYm9hcmQtZGlhbG9nL2NyZWF0ZS1ib2FyZC1kaWFsb2cuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnNcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxuXG5tYXQtZm9ybS1maWVsZFxuICB3aWR0aDogMTAwJVxuIiwibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/process/create-board-dialog/create-board-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/process/create-board-dialog/create-board-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: CreateBoardDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateBoardDialogComponent", function() { return CreateBoardDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let CreateBoardDialogComponent = class CreateBoardDialogComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.isSlackEnable = false;
        this.myGroup = this.formBuilder.group({
            boardName: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z][a-z s A-Z0-9]*")
                ]
            ]
        });
    }
    ngOnInit() { }
    onChangeSlackEnableOption(event) {
        this.isSlackEnable = this.isSlackEnable ? false : true;
    }
};
CreateBoardDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CreateBoardDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-create-board-dialog",
        template: __webpack_require__(/*! raw-loader!./create-board-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/create-board-dialog/create-board-dialog.component.html"),
        styles: [__webpack_require__(/*! ./create-board-dialog.component.sass */ "./src/app/process/create-board-dialog/create-board-dialog.component.sass")]
    })
], CreateBoardDialogComponent);



/***/ }),

/***/ "./src/app/process/dashboard/dashboard.component.sass":
/*!************************************************************!*\
  !*** ./src/app/process/dashboard/dashboard.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 300px;\n  max-height: 250px;\n  margin: 30px;\n}\n\n.mat-card {\n  border-left: 5px solid cornflowerblue;\n  margin-right: 3px;\n}\n\n.mat-card-content p {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\nspan {\n  font-weight: bold;\n  margin: 0 auto;\n}\n\n.mat-card-header {\n  display: block;\n  text-align: center;\n}\n\n.description {\n  border: 1px dashed lightgrey;\n  font-size: 15px;\n}\n\nh1 {\n  color: green;\n  position: fixed;\n  top: 40%;\n  left: 40%;\n}\n\n.board-avatar {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3Byb2Nlc3MvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxxQ0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZFxuICBtYXgtd2lkdGg6IDMwMHB4XG4gIG1heC1oZWlnaHQ6IDI1MHB4XG4gIG1hcmdpbjogMzBweFxuXG4ubWF0LWNhcmRcbiAgLy8gcGFkZGluZzogMCAwICFpbXBvcnRhbnRcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZVxuICBtYXJnaW4tcmlnaHQ6IDNweFxuXG4ubWF0LWNhcmQtY29udGVudCBwXG4gIG1hcmdpbi1sZWZ0OiAxNnB4XG4gIG1hcmdpbi1yaWdodDogMTZweFxuXG5zcGFuXG4gIGZvbnQtd2VpZ2h0OiBib2xkXG4gIG1hcmdpbjogMCBhdXRvXG5cbi5tYXQtY2FyZC1oZWFkZXJcbiAgZGlzcGxheTogYmxvY2tcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5kZXNjcmlwdGlvblxuICBib3JkZXI6IDFweCBkYXNoZWQgbGlnaHRncmV5XG4gIGZvbnQtc2l6ZTogMTVweFxuXG5oMVxuICBjb2xvcjogZ3JlZW5cbiAgcG9zaXRpb246IGZpeGVkXG4gIHRvcDogNDAlXG4gIGxlZnQ6IDQwJVxuXG4uYm9hcmQtYXZhdGFyXG4gIG1hcmdpbi1sZWZ0OiA1cHgiLCIuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogMzBweDtcbn1cblxuLm1hdC1jYXJkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHAge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JleTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5oMSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNDAlO1xufVxuXG4uYm9hcmQtYXZhdGFyIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/process/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/process/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! proflo-process-lib/lib/actions */ "./node_modules/proflo-process-lib/lib/actions.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
// import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
// import { NgRedux, select } from '@angular-redux/store';
// import { Observable, Subscription } from 'rxjs';
// import { Router } from '@angular/router';
// import { Board, BoardState, BoardList } from 'proflo-process-lib/lib/types';
// import { setCurrentOpenBoard } from 'proflo-process-lib/lib/actions';
// import { BoardService } from 'src/app/services/board.service';
// import { CookieService } from 'ngx-cookie-service';
// import { NgxSpinnerService } from 'ngx-spinner';
// import { WebStorageService, SESSION_STORAGE } from 'angular-webstorage-service';

// interface User {
//   _id: string;
//   userId: string;
//   userName: string;
//   userEmail: string;
//   userProfile: string;
//   boardList: Array<BoardList>;
// }
// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.sass']
// })
// export class DashboardComponent implements OnInit, OnDestroy {
//   @select(state => state.boards) boards$: Observable<BoardState>;
//   private boardList: Array<BoardList> = [];
//   private userEmail: string;
//   private subscription: Subscription;
//   constructor(
//       private router: Router,
//       private ngRedux: NgRedux<BoardState>,
//       private spinner: NgxSpinnerService,
//       private service: BoardService,
//       @Inject(SESSION_STORAGE) private storage: WebStorageService
//   ) { }
//   ngOnInit() {
//     this.userEmail = this.storage.get('userInformation').userEmail;
//     this.spinner.show();
//     this.subscription = this.service.getUserDetails(this.userEmail).subscribe((result: User) => {
//       if (result.boardList.length !== 0) {
//         this.boardList = result.boardList;
//       }
//       this.spinner.hide();
//     });
//   }
//   ngOnDestroy() {
//     // this.boards$.unsubscribe();
//     // this.subscription.unsubscribe();
//   }
//   // function to redirect to board component
//   onOpenBoard(board: Board) {
//     //  this.ngRedux.dispatch(setCurrentOpenBoard(board));
//     // this.router.navigate(['/board', board.boardId]);
//     this.spinner.show();
//     // Retrieve the board from server by boardId.
//     this.service.getBoard(board.boardId).subscribe((result: Board) => {
//       this.spinner.hide();
//       if (result.length !== 0) {
//         this.ngRedux.dispatch(setCurrentOpenBoard(result[0]));
//         this.router.navigate(['/board', board.boardId]);
//       } else {
//         this.router.navigate(['/pagenotfound']);
//       }
//     });
//   }
// }







let DashboardComponent = class DashboardComponent {
    constructor(router, ngRedux, spinner, service, storage) {
        this.router = router;
        this.ngRedux = ngRedux;
        this.spinner = spinner;
        this.service = service;
        this.storage = storage;
        this.boardList = [];
    }
    ngOnInit() {
        this.userEmail = this.storage.get('userInformation').userEmail;
        this.userId = this.storage.get('userInformation').userId;
        this.spinner.show();
        this.service.getUserDetails(this.userEmail).subscribe((result) => {
            if (result.boardList.length !== 0) {
                this.boardList = result.boardList;
            }
            this.spinner.hide();
        });
    }
    ngOnDestroy() { }
    // function to redirect to board component 
    onOpenBoard(board) {
        // this.ngRedux.dispatch(setCurrentOpenBoard(board));
        // this.router.navigate(['/board', board.boardId]);
        this.spinner.show();
        // Retrieve the board from server by boardId.
        this.service.getBoard(board.boardId, this.userId).subscribe((result) => {
            this.spinner.hide();
            if (result.length !== 0) {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setCurrentOpenBoard"])(result[0]));
                this.router.navigate(['/board', board.boardId]);
            }
            else {
                this.router.navigate(['/pagenotfound']);
            }
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] },
    { type: src_app_services_board_service__WEBPACK_IMPORTED_MODULE_5__["BoardService"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["SESSION_STORAGE"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])(state => state.boards)
], DashboardComponent.prototype, "boards$", void 0);
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.sass */ "./src/app/process/dashboard/dashboard.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["SESSION_STORAGE"]))
], DashboardComponent);



/***/ }),

/***/ "./src/app/process/group/group.component.sass":
/*!****************************************************!*\
  !*** ./src/app/process/group/group.component.sass ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.card {\n  width: 90%;\n  margin: 20px 5%;\n}\n.table-container {\n  overflow: scroll;\n}\n::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n::-webkit-scrollbar-thumb {\n  background: lightgrey;\n}\n::-webkit-scrollbar-track {\n  background: lightgrey;\n}\ntable {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  margin: 10px 0 0 0;\n}\n.taskHeader {\n  text-align: left;\n  border: none;\n}\n.addRowDiv {\n  margin: 0 4px;\n  width: 100%;\n  border: 1px dashed grey;\n}\n.addRowInputBox {\n  width: 100%;\n  border: 1px dashed black;\n  outline: none;\n}\n.addColumnHeader {\n  max-width: 20px;\n}\n.addGroupHeader {\n  width: 3%;\n  border: none;\n}\nthead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background-color: #FFFFFF;\n}\ntbody th {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  background-color: #FFFFFF;\n}\nthead th:first-child {\n  left: 0;\n  z-index: 1;\n  background-color: #FFFFFF;\n}\n.rowDeleteIcon {\n  color: lightgrey;\n}\n.rowDeleteIcon:hover {\n  cursor: pointer;\n  color: darkorchid;\n}\n.columnHeader {\n  text-align: center;\n}\n.sideHeader {\n  padding-right: 15px !important;\n}\n.columnHeader-container:hover .columnHeader {\n  margin-right: 10px;\n}\n.columnHeader-container:hover .columnDeleteIcon {\n  display: inline;\n}\n.columnDeleteIcon {\n  color: lightgrey;\n  display: none;\n}\n.columnDeleteIcon:hover {\n  cursor: pointer;\n  color: red;\n}\n.taskHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  max-width: 100%;\n}\n.mat-menu-item {\n  border: none;\n  outline: none;\n}\n.mat-menu-item:hover {\n  color: black;\n}\n.groupIcon {\n  color: lightgrey;\n}\n.groupIcon:hover {\n  color: black;\n  cursor: pointer;\n}\n::ng-deep mat-card-header .mat-card-header-text {\n  margin: 0 0;\n}\nmat-card-header span {\n  font-size: 20px;\n  color: darkorchid;\n}\nmat-card-header {\n  display: flex;\n  align-items: center;\n}\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none;\n}\n.firstColumn {\n  width: available;\n}\n.row-task-cell {\n  min-width: 100%;\n}\n.row-column-cell {\n  padding-top: 0px !important;\n  margin: 0px !important;\n  min-width: 10rem;\n  max-width: 100%;\n  min-height: 27px;\n  background: transparent;\n  border: 1px solid black;\n}\n.row-column-cell:focus {\n  outline: none;\n}\n.row-column-cell:hover {\n  cursor: pointer;\n}\n.text-number-cell {\n  min-width: 160px;\n  min-height: 27px;\n}\ntd {\n  width: 1px;\n}\n#group-name {\n  border: none !important;\n  outline-color: #008cff;\n}\n.column-name {\n  border: none !important;\n  width: 95%;\n  outline-color: #008cff;\n  text-align: center;\n}\n#container {\n  visibility: hidden;\n}\n#loader {\n  color: #008cff;\n  height: 40px;\n  left: 45%;\n  position: absolute;\n  top: 45%;\n  width: 30%;\n}\n.wrap {\n  margin: 0 auto;\n  width: 300px;\n  text-align: center;\n}\n#preview {\n  border: 1px solid;\n  background-color: #ba68c8;\n  height: 40px;\n  display: none;\n}\n.group-color-picker-input {\n  width: 100%;\n  height: 100%;\n  border: none;\n}\n/* Tile customization styles */\n#element + .e-container {\n  background-color: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n#element + .e-container .e-custom-palette.e-palette-group {\n  height: 182px;\n  padding: 0px;\n}\n#element + .e-container .e-palette .e-custom-tile {\n  border: 0;\n  color: #fff;\n  height: 36px;\n  font-size: 18px;\n  width: 36px;\n  line-height: 36px;\n  border-radius: 50%;\n  margin: 2px 5px;\n}\n#element + .e-container .e-palette .e-custom-tile.e-selected::before {\n  content: \"\";\n}\n#element + .e-container .e-palette .e-custom-tile.e-selected {\n  outline: none;\n}\nh4 {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", \"sans-serif\";\n  font-size: 14px;\n}\n.label-list-container {\n  max-height: 50px;\n  overflow-x: scroll;\n  overflow: scroll;\n}\n.label-list:hover i {\n  padding: 10px;\n  border-radius: 5px;\n  visibility: visible;\n}\n.label-list i {\n  visibility: hidden;\n}\n.labelinput {\n  padding: 10px;\n}\n.labelinput input {\n  border: 1px solid lightgrey;\n}\n.buttondiv {\n  margin: 0 auto;\n}\n.input-color {\n  width: 220px;\n  height: auto;\n}\n.close-div i {\n  font-size: 16px;\n  color: grey;\n  padding: 5px;\n}\n.label-color {\n  height: 10px;\n  width: 10px;\n  border-radius: 2px;\n  padding: 2px;\n}\n::ng-deep .mat-menu-content {\n  position: relative !important;\n}\n.status {\n  color: transparent;\n  text-shadow: 0 0 0 gray;\n}\n.staus:focus {\n  outline: none;\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n}\n::ng-deep ngx-avatar div.avatar-container {\n  margin-top: 0;\n  margin-left: 25px;\n}\n.unassign_icon {\n  display: none;\n}\n.assignee_list:hover .unassign_icon {\n  display: inline;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy9ncm91cC9ncm91cC5jb21wb25lbnQuc2FzcyIsIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ2tSaEI7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBRGhSRjtBQ2tSQTtFQUNFLGdCQUFBO0FEL1FGO0FDaVJBO0VBQ0UsUUFBQTtFQUNBLFNBQUE7QUQ5UUY7QUNnUkE7RUFDRSxxQkFBQTtBRDdRRjtBQytRQTtFQUNFLHFCQUFBO0FENVFGO0FDOFFBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBRDNRRjtBQzhRQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBRDNRRjtBQzZRQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUQxUUY7QUM0UUE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FEelFGO0FDMlFBO0VBQ0UsZUFBQTtBRHhRRjtBQzBRQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0FEdlFGO0FDMFFFO0VBQ0Usd0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtBRHZRSjtBQzBRRTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7QUR2UUo7QUMyUUk7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FEeFFOO0FDMFFBO0VBQ0UsZ0JBQUE7QUR2UUY7QUN3UUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUR0UUo7QUN3UUE7RUFDRSxrQkFBQTtBRHJRRjtBQ3VRQTtFQUNFLDhCQUFBO0FEcFFGO0FDd1FJO0VBQ0Usa0JBQUE7QURyUU47QUNzUUk7RUFDRSxlQUFBO0FEcFFOO0FDc1FBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0FEblFGO0FDb1FFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QURsUUo7QUNvUUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QURqUUY7QUNtUUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRGhRRjtBQ2lRRTtFQUNFLFlBQUE7QUQvUEo7QUNnUUE7RUFDRSxnQkFBQTtBRDdQRjtBQzhQRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FENVBKO0FDOFBBO0VBQ0UsV0FBQTtBRDNQRjtBQzZQQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRDFQRjtBQzRQQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRHpQRjtBQzJQQTtFQUNFLGdCQUFBO0FEeFBGO0FDMFBBO0VBQ0UsZ0JBQUE7QUR2UEY7QUN5UEE7RUFDRSxlQUFBO0FEdFBGO0FDd1BBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBRHJQRjtBQ3NQRTtFQUNFLGFBQUE7QURwUEo7QUNxUEU7RUFDRSxlQUFBO0FEblBKO0FDcVBBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRGxQRjtBQ29QQTtFQUNFLFVBQUE7QURqUEY7QUNtUEE7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0FEaFBGO0FDa1BBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRC9PRjtBQ3FQQTtFQUNFLGtCQUFBO0FEbFBGO0FDb1BBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBRGpQRjtBQ21QQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QURoUEY7QUNrUEE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUQvT0Y7QUNvUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURqUEY7QUNxUEEsOEJBQUE7QUFFQTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRG5QRjtBQ3FQQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FEbFBGO0FDb1BBO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRGpQRjtBQ21QQTtFQUNFLFlBQUE7QURoUEY7QUNrUEE7RUFDRSxhQUFBO0FEL09GO0FDaVBBO0VBQ0UsaUVBQUE7RUFDQSxlQUFBO0FEOU9GO0FDZ1BBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEN09GO0FDK09BO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUQ1T0Y7QUM4T0E7RUFDRSxrQkFBQTtBRDNPRjtBQzZPQTtFQUNFLGFBQUE7QUQxT0Y7QUM0T0E7RUFDRSwyQkFBQTtBRHpPRjtBQzJPQTtFQUNFLGNBQUE7QUR4T0Y7QUMwT0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBRHZPRjtBQ3lPQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHRPRjtBQ3dPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FEck9GO0FDdU9BO0VBQ0UsNkJBQUE7QURwT0Y7QUNzT0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FEbk9GO0FDcU9BO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7QURsT0Y7QUNtT0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QURoT0Y7QUNrT0E7RUFDRSxhQUFBO0FEL05GO0FDbU9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QURoT04iLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNhcmQge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggNSU7XG59XG5cbi50YWJsZS1jb250YWluZXIge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxudGFibGUge1xuICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbi50YXNrSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRkUm93RGl2IHtcbiAgbWFyZ2luOiAwIDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCBncmV5O1xufVxuXG4uYWRkUm93SW5wdXRCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uYWRkQ29sdW1uSGVhZGVyIHtcbiAgbWF4LXdpZHRoOiAyMHB4O1xufVxuXG4uYWRkR3JvdXBIZWFkZXIge1xuICB3aWR0aDogMyU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGhlYWQgdGgge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxudGJvZHkgdGgge1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbnRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cblxuLnJvd0RlbGV0ZUljb24ge1xuICBjb2xvcjogbGlnaHRncmV5O1xufVxuLnJvd0RlbGV0ZUljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBkYXJrb3JjaGlkO1xufVxuXG4uY29sdW1uSGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lkZUhlYWRlciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmNvbHVtbkhlYWRlci1jb250YWluZXI6aG92ZXIgLmNvbHVtbkhlYWRlciB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb2x1bW5IZWFkZXItY29udGFpbmVyOmhvdmVyIC5jb2x1bW5EZWxldGVJY29uIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uY29sdW1uRGVsZXRlSWNvbiB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29sdW1uRGVsZXRlSWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRhc2tIZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tYXQtbWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZ3JvdXBJY29uIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cbi5ncm91cEljb246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOjpuZy1kZWVwIG1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtaGVhZGVyLXRleHQge1xuICBtYXJnaW46IDAgMDtcbn1cblxubWF0LWNhcmQtaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBkYXJrb3JjaGlkO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5maXJzdENvbHVtbiB7XG4gIHdpZHRoOiBhdmFpbGFibGU7XG59XG5cbi5yb3ctdGFzay1jZWxsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ucm93LWNvbHVtbi1jZWxsIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5yb3ctY29sdW1uLWNlbGw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJvdy1jb2x1bW4tY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRleHQtbnVtYmVyLWNlbGwge1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBtaW4taGVpZ2h0OiAyN3B4O1xufVxuXG50ZCB7XG4gIHdpZHRoOiAxcHg7XG59XG5cbiNncm91cC1uYW1lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIG91dGxpbmUtY29sb3I6ICMwMDhjZmY7XG59XG5cbi5jb2x1bW4tbmFtZSB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICB3aWR0aDogOTUlO1xuICBvdXRsaW5lLWNvbG9yOiAjMDA4Y2ZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNjb250YWluZXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbiNsb2FkZXIge1xuICBjb2xvcjogIzAwOGNmZjtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsZWZ0OiA0NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi53cmFwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jcHJldmlldyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmE2OGM4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5ncm91cC1jb2xvci1waWNrZXItaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIFRpbGUgY3VzdG9taXphdGlvbiBzdHlsZXMgKi9cbiNlbGVtZW50ICsgLmUtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbiNlbGVtZW50ICsgLmUtY29udGFpbmVyIC5lLWN1c3RvbS1wYWxldHRlLmUtcGFsZXR0ZS1ncm91cCB7XG4gIGhlaWdodDogMTgycHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuI2VsZW1lbnQgKyAuZS1jb250YWluZXIgLmUtcGFsZXR0ZSAuZS1jdXN0b20tdGlsZSB7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMzZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAycHggNXB4O1xufVxuXG4jZWxlbWVudCArIC5lLWNvbnRhaW5lciAuZS1wYWxldHRlIC5lLWN1c3RvbS10aWxlLmUtc2VsZWN0ZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qSzXCI7XG59XG5cbiNlbGVtZW50ICsgLmUtY29udGFpbmVyIC5lLXBhbGV0dGUgLmUtY3VzdG9tLXRpbGUuZS1zZWxlY3RlZCB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBcInNhbnMtc2VyaWZcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubGFiZWwtbGlzdC1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5sYWJlbC1saXN0OmhvdmVyIGkge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5sYWJlbC1saXN0IGkge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5sYWJlbGlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmxhYmVsaW5wdXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG59XG5cbi5idXR0b25kaXYge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmlucHV0LWNvbG9yIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jbG9zZS1kaXYgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGdyZXk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxhYmVsLWNvbG9yIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAycHg7XG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xufVxuXG4uc3RhdHVzIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JheTtcbn1cblxuLnN0YXVzOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgZmlsdGVyOiBibHVyKDIwcHgpO1xufVxuXG46Om5nLWRlZXAgbmd4LWF2YXRhciBkaXYuYXZhdGFyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4udW5hc3NpZ25faWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hc3NpZ25lZV9saXN0OmhvdmVyIC51bmFzc2lnbl9pY29uIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiLy8uY2FyZFxuLy8gIHdpZHRoOiA5MCVcbi8vICBtYXJnaW46IDIwcHggNSVcbi8vXG4vLy50YWJsZS1jb250YWluZXJcbi8vICBvdmVyZmxvdzogc2Nyb2xsXG4vL1xuLy86Oi13ZWJraXQtc2Nyb2xsYmFyXG4vLyAgd2lkdGg6IDBcbi8vICBoZWlnaHQ6IDBcbi8vXG4vLzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcbi8vICBiYWNrZ3JvdW5kOiBsaWdodGdyZXlcbi8vXG4vLzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcbi8vICBiYWNrZ3JvdW5kOiBsaWdodGdyZXlcbi8vXG4vL3RhYmxlXG4vLyAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmXG4vLyAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZVxuLy8gIHdpZHRoOiAxMDAlXG4vLyAgbWFyZ2luOiAxMHB4IDAgMCAwXG4vL1xuLy9cbi8vLnRhc2tIZWFkZXJcbi8vICB0ZXh0LWFsaWduOiBsZWZ0XG4vLyAgYm9yZGVyOiBub25lXG4vL1xuLy8uYWRkUm93RGl2XG4vLyAgbWFyZ2luOiAwIDRweFxuLy8gIHdpZHRoOiAxMDAlXG4vLyAgYm9yZGVyOiAxcHggZGFzaGVkIGdyZXlcbi8vXG4vLy5hZGRSb3dJbnB1dEJveFxuLy8gIHdpZHRoOiAxMDAlXG4vLyAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrXG4vLyAgb3V0bGluZTogbm9uZVxuLy9cbi8vLmFkZENvbHVtbkhlYWRlclxuLy8gIG1heC13aWR0aDogMjBweFxuLy9cbi8vLmFkZEdyb3VwSGVhZGVyXG4vLyAgd2lkdGg6IDMlXG4vLyAgYm9yZGVyOiBub25lXG4vL1xuLy90aGVhZFxuLy8gIHRoXG4vLyAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3lcbi8vICAgIHBvc2l0aW9uOiBzdGlja3lcbi8vICAgIHRvcDogMFxuLy8gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuLy9cbi8vdGJvZHlcbi8vICB0aFxuLy8gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5XG4vLyAgICBwb3NpdGlvbjogc3RpY2t5XG4vLyAgICBsZWZ0OiAwXG4vLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGXG4vL1xuLy90aGVhZFxuLy8gIHRoXG4vLyAgICAmOmZpcnN0LWNoaWxkXG4vLyAgICAgIGxlZnQ6IDBcbi8vICAgICAgei1pbmRleDogMVxuLy8gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGXG4vL1xuLy8ucm93RGVsZXRlSWNvblxuLy8gIGNvbG9yOiBsaWdodGdyZXlcbi8vICAmOmhvdmVyXG4vLyAgICBjdXJzb3I6IHBvaW50ZXJcbi8vICAgIGNvbG9yOiBkYXJrb3JjaGlkXG4vL1xuLy8uY29sdW1uSGVhZGVyXG4vLyAgdGV4dC1hbGlnbjogY2VudGVyXG4vL1xuLy8uc2lkZUhlYWRlclxuLy8gIHBhZGRpbmctcmlnaHQ6IDE1cHggIWltcG9ydGFudFxuLy9cbi8vLmNvbHVtbkhlYWRlci1jb250YWluZXJcbi8vICAmOmhvdmVyXG4vLyAgICAuY29sdW1uSGVhZGVyXG4vLyAgICAgIG1hcmdpbi1yaWdodDogMTBweFxuLy8gICAgLmNvbHVtbkRlbGV0ZUljb25cbi8vICAgICAgZGlzcGxheTogaW5saW5lXG4vL1xuLy8uY29sdW1uRGVsZXRlSWNvblxuLy8gIGNvbG9yOiBsaWdodGdyZXlcbi8vICBkaXNwbGF5OiBub25lXG4vLyAgJjpob3ZlclxuLy8gICAgY3Vyc29yOiBwb2ludGVyXG4vLyAgICBjb2xvcjogcmVkXG4vL1xuLy8udGFza0hlYWRlclxuLy8gIGRpc3BsYXk6IGZsZXhcbi8vICBhbGlnbi1pdGVtczogY2VudGVyXG4vLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbi8vICBtYXgtd2lkdGg6IDEwMCVcbi8vXG4vLy5tYXQtbWVudS1pdGVtXG4vLyAgYm9yZGVyOiBub25lXG4vLyAgb3V0bGluZTogbm9uZVxuLy8gICY6aG92ZXJcbi8vICAgIGNvbG9yOiBibGFja1xuLy8uZ3JvdXBJY29uXG4vLyAgY29sb3I6IGxpZ2h0Z3JleVxuLy8gICY6aG92ZXJcbi8vICAgIGNvbG9yOiBibGFja1xuLy8gICAgY3Vyc29yOiBwb2ludGVyXG4vL1xuLy86Om5nLWRlZXAgbWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC1oZWFkZXItdGV4dFxuLy8gIG1hcmdpbjogMCAwXG4vL1xuLy9tYXQtY2FyZC1oZWFkZXIgc3BhblxuLy8gIGZvbnQtc2l6ZTogMjBweFxuLy8gIGNvbG9yOiBkYXJrb3JjaGlkXG4vL1xuLy9tYXQtY2FyZC1oZWFkZXJcbi8vICBkaXNwbGF5OiBmbGV4XG4vLyAgYWxpZ24taXRlbXM6IGNlbnRlclxuLy9cbi8vLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKVxuLy8gIGJveC1zaGFkb3c6IG5vbmVcbi8vXG4vLy5maXJzdENvbHVtblxuLy8gIHdpZHRoOiBhdmFpbGFibGVcbi8vXG4vLy5yb3ctdGFzay1jZWxsXG4vLyAgbWluLXdpZHRoOiAxMDAlXG4vL1xuLy8ucm93LWNvbHVtbi1jZWxsXG4vLyAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50XG4vLyAgbWFyZ2luOiAwcHggIWltcG9ydGFudFxuLy8gIG1pbi13aWR0aDogMTByZW1cbi8vICBtYXgtd2lkdGg6IDEwMCVcbi8vICBtaW4taGVpZ2h0OiAyN3B4XG4vLyAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbi8vICBib3JkZXI6IDFweCBzb2xpZCBibGFja1xuLy8gICY6Zm9jdXNcbi8vICAgIG91dGxpbmU6IG5vbmVcbi8vICAmOmhvdmVyXG4vLyAgICBjdXJzb3I6IHBvaW50ZXJcbi8vXG4vLy50ZXh0LW51bWJlci1jZWxsXG4vLyAgbWluLXdpZHRoOiAxNjBweFxuLy8gIG1pbi1oZWlnaHQ6IDI3cHhcbi8vXG4vL3RkXG4vLyAgd2lkdGg6IDFweFxuLy9cbi8vI2dyb3VwLW5hbWVcbi8vICBib3JkZXI6IG5vbmUgIWltcG9ydGFudFxuLy8gIG91dGxpbmUtY29sb3I6ICMwMDhjZmZcbi8vXG4vLy5jb2x1bW4tbmFtZVxuLy8gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50XG4vLyAgd2lkdGg6IDk1JVxuLy8gIG91dGxpbmUtY29sb3I6ICMwMDhjZmZcbi8vICB0ZXh0LWFsaWduOiBjZW50ZXJcbi8vXG4vL1xuLy9cbi8vLy8gPT09PT09PT09PT09PT09PSAgICAgICAgU3RhdHVzIGNvbHVtbiBzYXNzICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT1cbi8vXG4vLyNjb250YWluZXJcbi8vICB2aXNpYmlsaXR5OiBoaWRkZW5cbi8vXG4vLyNsb2FkZXJcbi8vICBjb2xvcjogIzAwOGNmZlxuLy8gIGhlaWdodDogNDBweFxuLy8gIGxlZnQ6IDQ1JVxuLy8gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuLy8gIHRvcDogNDUlXG4vLyAgd2lkdGg6IDMwJVxuLy9cbi8vLndyYXBcbi8vICBtYXJnaW46IDAgYXV0b1xuLy8gIHdpZHRoOiAzMDBweFxuLy8gIHRleHQtYWxpZ246IGNlbnRlclxuLy9cbi8vI3ByZXZpZXdcbi8vICBib3JkZXI6IDFweCBzb2xpZFxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNiYTY4Yzhcbi8vICBoZWlnaHQ6IDQwcHhcbi8vICBkaXNwbGF5OiBub25lXG4vL1xuLy8vLy5ncm91cC1jb2xvci1waWNrZXJcbi8vLy8gIGhlaWdodDogNTBweCAhaW1wb3J0YW50XG4vLy8vICB3aWR0aDogMTAwcHggIWltcG9ydGFudFxuLy8uZ3JvdXAtY29sb3ItcGlja2VyLWlucHV0XG4vLyAgd2lkdGg6IDEwMCVcbi8vICBoZWlnaHQ6IDEwMCVcbi8vICBib3JkZXI6IG5vbmVcbi8vXG4vL1xuLy9cbi8vLyogVGlsZSBjdXN0b21pemF0aW9uIHN0eWxlcyAqL1xuLy9cbi8vI2VsZW1lbnQrLmUtY29udGFpbmVyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRcbi8vICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50XG4vLyAgYm94LXNoYWRvdzogbm9uZVxuLy9cbi8vI2VsZW1lbnQrLmUtY29udGFpbmVyIC5lLWN1c3RvbS1wYWxldHRlLmUtcGFsZXR0ZS1ncm91cFxuLy8gIGhlaWdodDogMTgycHhcbi8vICBwYWRkaW5nOiAwcHhcbi8vXG4vLyNlbGVtZW50Ky5lLWNvbnRhaW5lciAuZS1wYWxldHRlIC5lLWN1c3RvbS10aWxlXG4vLyAgYm9yZGVyOiAwXG4vLyAgY29sb3I6ICNmZmZcbi8vICBoZWlnaHQ6IDM2cHhcbi8vICBmb250LXNpemU6IDE4cHhcbi8vICB3aWR0aDogMzZweFxuLy8gIGxpbmUtaGVpZ2h0OiAzNnB4XG4vLyAgYm9yZGVyLXJhZGl1czogNTAlXG4vLyAgbWFyZ2luOiAycHggNXB4XG4vL1xuLy8jZWxlbWVudCsuZS1jb250YWluZXIgLmUtcGFsZXR0ZSAuZS1jdXN0b20tdGlsZS5lLXNlbGVjdGVkOjpiZWZvcmVcbi8vICBjb250ZW50OiAnXFxlOTMzJ1xuLy9cbi8vI2VsZW1lbnQrLmUtY29udGFpbmVyIC5lLXBhbGV0dGUgLmUtY3VzdG9tLXRpbGUuZS1zZWxlY3RlZFxuLy8gIG91dGxpbmU6IG5vbmVcbi8vXG4vL2g0XG4vLyAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCAnc2Fucy1zZXJpZidcbi8vICBmb250LXNpemU6IDE0cHhcbi8vXG4vLy5sYWJlbC1saXN0LWNvbnRhaW5lclxuLy8gIG1heC1oZWlnaHQ6IDUwcHhcbi8vICBvdmVyZmxvdy14OiBzY3JvbGxcbi8vICBvdmVyZmxvdzogc2Nyb2xsXG4vL1xuLy8ubGFiZWwtbGlzdDpob3ZlciBpXG4vLyAgcGFkZGluZzogMTBweFxuLy8gIGJvcmRlci1yYWRpdXM6IDVweFxuLy8gIHZpc2liaWxpdHk6IHZpc2libGVcbi8vXG4vLy5sYWJlbC1saXN0IGlcbi8vICB2aXNpYmlsaXR5OiBoaWRkZW5cbi8vXG4vLy5sYWJlbGlucHV0XG4vLyAgcGFkZGluZzogMTBweFxuLy9cbi8vLmxhYmVsaW5wdXQgaW5wdXRcbi8vICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXlcbi8vXG4vLy5idXR0b25kaXZcbi8vICBtYXJnaW46IDAgYXV0b1xuLy9cbi8vLmlucHV0LWNvbG9yXG4vLyAgd2lkdGg6IDIyMHB4XG4vLyAgaGVpZ2h0OiBhdXRvXG4vL1xuLy8uY2xvc2UtZGl2IGlcbi8vICBmb250LXNpemU6IDE2cHhcbi8vICBjb2xvcjogZ3JleVxuLy8gIHBhZGRpbmc6IDVweFxuLy9cbi8vLmxhYmVsLWNvbG9yXG4vLyAgaGVpZ2h0OiAxMHB4XG4vLyAgd2lkdGg6IDEwcHhcbi8vICBib3JkZXItcmFkaXVzOiAycHhcbi8vICBwYWRkaW5nOiAycHhcbi8vXG4vLzo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudFxuLy8gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50XG4vL1xuLy8uc3RhdHVzXG4vLyAgY29sb3I6IHRyYW5zcGFyZW50XG4vLyAgdGV4dC1zaGFkb3c6IDAgMCAwIGdyYXlcbi8vXG4vLy5zdGF1czpmb2N1c1xuLy8gIG91dGxpbmU6IG5vbmVcbi8vICBmaWx0ZXI6IGJsdXIoMjBweClcblxuLmNhcmRcbiAgd2lkdGg6IDkwJVxuICBtYXJnaW46IDIwcHggNSVcblxuLnRhYmxlLWNvbnRhaW5lclxuICBvdmVyZmxvdzogc2Nyb2xsXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXJcbiAgd2lkdGg6IDBcbiAgaGVpZ2h0OiAwXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcbiAgYmFja2dyb3VuZDogbGlnaHRncmV5XG5cbnRhYmxlXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZlxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlXG4gIHdpZHRoOiAxMDAlXG4gIG1hcmdpbjogMTBweCAwIDAgMFxuXG5cbi50YXNrSGVhZGVyXG4gIHRleHQtYWxpZ246IGxlZnRcbiAgYm9yZGVyOiBub25lXG5cbi5hZGRSb3dEaXZcbiAgbWFyZ2luOiAwIDRweFxuICB3aWR0aDogMTAwJVxuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JleVxuXG4uYWRkUm93SW5wdXRCb3hcbiAgd2lkdGg6IDEwMCVcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGJsYWNrXG4gIG91dGxpbmU6IG5vbmVcblxuLmFkZENvbHVtbkhlYWRlclxuICBtYXgtd2lkdGg6IDIwcHhcblxuLmFkZEdyb3VwSGVhZGVyXG4gIHdpZHRoOiAzJVxuICBib3JkZXI6IG5vbmVcblxudGhlYWRcbiAgdGhcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3lcbiAgICBwb3NpdGlvbjogc3RpY2t5XG4gICAgdG9wOiAwXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuXG50Ym9keVxuICB0aFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreVxuICAgIHBvc2l0aW9uOiBzdGlja3lcbiAgICBsZWZ0OiAwXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRlxuXG50aGVhZFxuICB0aFxuICAgICY6Zmlyc3QtY2hpbGRcbiAgICAgIGxlZnQ6IDBcbiAgICAgIHotaW5kZXg6IDFcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkZcblxuLnJvd0RlbGV0ZUljb25cbiAgY29sb3I6IGxpZ2h0Z3JleVxuICAmOmhvdmVyXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgY29sb3I6IGRhcmtvcmNoaWRcblxuLmNvbHVtbkhlYWRlclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLnNpZGVIZWFkZXJcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50XG5cbi5jb2x1bW5IZWFkZXItY29udGFpbmVyXG4gICY6aG92ZXJcbiAgICAuY29sdW1uSGVhZGVyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHhcbiAgICAuY29sdW1uRGVsZXRlSWNvblxuICAgICAgZGlzcGxheTogaW5saW5lXG5cbi5jb2x1bW5EZWxldGVJY29uXG4gIGNvbG9yOiBsaWdodGdyZXlcbiAgZGlzcGxheTogbm9uZVxuICAmOmhvdmVyXG4gICAgY3Vyc29yOiBwb2ludGVyXG4gICAgY29sb3I6IHJlZFxuXG4udGFza0hlYWRlclxuICBkaXNwbGF5OiBmbGV4XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcbiAgbWF4LXdpZHRoOiAxMDAlXG5cbi5tYXQtbWVudS1pdGVtXG4gIGJvcmRlcjogbm9uZVxuICBvdXRsaW5lOiBub25lXG4gICY6aG92ZXJcbiAgICBjb2xvcjogYmxhY2tcbi5ncm91cEljb25cbiAgY29sb3I6IGxpZ2h0Z3JleVxuICAmOmhvdmVyXG4gICAgY29sb3I6IGJsYWNrXG4gICAgY3Vyc29yOiBwb2ludGVyXG5cbjo6bmctZGVlcCBtYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLWhlYWRlci10ZXh0XG4gIG1hcmdpbjogMCAwXG5cbm1hdC1jYXJkLWhlYWRlciBzcGFuXG4gIGZvbnQtc2l6ZTogMjBweFxuICBjb2xvcjogZGFya29yY2hpZFxuXG5tYXQtY2FyZC1oZWFkZXJcbiAgZGlzcGxheTogZmxleFxuICBhbGlnbi1pdGVtczogY2VudGVyXG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSlcbiAgYm94LXNoYWRvdzogbm9uZVxuXG4uZmlyc3RDb2x1bW5cbiAgd2lkdGg6IGF2YWlsYWJsZVxuXG4ucm93LXRhc2stY2VsbFxuICBtaW4td2lkdGg6IDEwMCVcblxuLnJvdy1jb2x1bW4tY2VsbFxuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudFxuICBtaW4td2lkdGg6IDEwcmVtXG4gIG1heC13aWR0aDogMTAwJVxuICBtaW4taGVpZ2h0OiAyN3B4XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrXG4gICY6Zm9jdXNcbiAgICBvdXRsaW5lOiBub25lXG4gICY6aG92ZXJcbiAgICBjdXJzb3I6IHBvaW50ZXJcblxuLnRleHQtbnVtYmVyLWNlbGxcbiAgbWluLXdpZHRoOiAxNjBweFxuICBtaW4taGVpZ2h0OiAyN3B4XG5cbnRkXG4gIHdpZHRoOiAxcHhcblxuI2dyb3VwLW5hbWVcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnRcbiAgb3V0bGluZS1jb2xvcjogIzAwOGNmZlxuXG4uY29sdW1uLW5hbWVcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnRcbiAgd2lkdGg6IDk1JVxuICBvdXRsaW5lLWNvbG9yOiAjMDA4Y2ZmXG4gIHRleHQtYWxpZ246IGNlbnRlclxuXG5cblxuLy8gPT09PT09PT09PT09PT09PSAgICAgICAgU3RhdHVzIGNvbHVtbiBzYXNzICAgICAgICA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuI2NvbnRhaW5lclxuICB2aXNpYmlsaXR5OiBoaWRkZW5cblxuI2xvYWRlclxuICBjb2xvcjogIzAwOGNmZlxuICBoZWlnaHQ6IDQwcHhcbiAgbGVmdDogNDUlXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZVxuICB0b3A6IDQ1JVxuICB3aWR0aDogMzAlXG5cbi53cmFwXG4gIG1hcmdpbjogMCBhdXRvXG4gIHdpZHRoOiAzMDBweFxuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuI3ByZXZpZXdcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhNjhjOFxuICBoZWlnaHQ6IDQwcHhcbiAgZGlzcGxheTogbm9uZVxuXG4vLy5ncm91cC1jb2xvci1waWNrZXJcbi8vICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudFxuLy8gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50XG4uZ3JvdXAtY29sb3ItcGlja2VyLWlucHV0XG4gIHdpZHRoOiAxMDAlXG4gIGhlaWdodDogMTAwJVxuICBib3JkZXI6IG5vbmVcblxuXG5cbi8qIFRpbGUgY3VzdG9taXphdGlvbiBzdHlsZXMgKi9cblxuI2VsZW1lbnQrLmUtY29udGFpbmVyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcbiAgYm94LXNoYWRvdzogbm9uZVxuXG4jZWxlbWVudCsuZS1jb250YWluZXIgLmUtY3VzdG9tLXBhbGV0dGUuZS1wYWxldHRlLWdyb3VwXG4gIGhlaWdodDogMTgycHhcbiAgcGFkZGluZzogMHB4XG5cbiNlbGVtZW50Ky5lLWNvbnRhaW5lciAuZS1wYWxldHRlIC5lLWN1c3RvbS10aWxlXG4gIGJvcmRlcjogMFxuICBjb2xvcjogI2ZmZlxuICBoZWlnaHQ6IDM2cHhcbiAgZm9udC1zaXplOiAxOHB4XG4gIHdpZHRoOiAzNnB4XG4gIGxpbmUtaGVpZ2h0OiAzNnB4XG4gIGJvcmRlci1yYWRpdXM6IDUwJVxuICBtYXJnaW46IDJweCA1cHhcblxuI2VsZW1lbnQrLmUtY29udGFpbmVyIC5lLXBhbGV0dGUgLmUtY3VzdG9tLXRpbGUuZS1zZWxlY3RlZDo6YmVmb3JlXG4gIGNvbnRlbnQ6ICdcXGU5MzMnXG5cbiNlbGVtZW50Ky5lLWNvbnRhaW5lciAuZS1wYWxldHRlIC5lLWN1c3RvbS10aWxlLmUtc2VsZWN0ZWRcbiAgb3V0bGluZTogbm9uZVxuXG5oNFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsICdzYW5zLXNlcmlmJ1xuICBmb250LXNpemU6IDE0cHhcblxuLmxhYmVsLWxpc3QtY29udGFpbmVyXG4gIG1heC1oZWlnaHQ6IDUwcHhcbiAgb3ZlcmZsb3cteDogc2Nyb2xsXG4gIG92ZXJmbG93OiBzY3JvbGxcblxuLmxhYmVsLWxpc3Q6aG92ZXIgaVxuICBwYWRkaW5nOiAxMHB4XG4gIGJvcmRlci1yYWRpdXM6IDVweFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlXG5cbi5sYWJlbC1saXN0IGlcbiAgdmlzaWJpbGl0eTogaGlkZGVuXG5cbi5sYWJlbGlucHV0XG4gIHBhZGRpbmc6IDEwcHhcblxuLmxhYmVsaW5wdXQgaW5wdXRcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5XG5cbi5idXR0b25kaXZcbiAgbWFyZ2luOiAwIGF1dG9cblxuLmlucHV0LWNvbG9yXG4gIHdpZHRoOiAyMjBweFxuICBoZWlnaHQ6IGF1dG9cblxuLmNsb3NlLWRpdiBpXG4gIGZvbnQtc2l6ZTogMTZweFxuICBjb2xvcjogZ3JleVxuICBwYWRkaW5nOiA1cHhcblxuLmxhYmVsLWNvbG9yXG4gIGhlaWdodDogMTBweFxuICB3aWR0aDogMTBweFxuICBib3JkZXItcmFkaXVzOiAycHhcbiAgcGFkZGluZzogMnB4XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtY29udGVudFxuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudFxuXG4uc3RhdHVzXG4gIGNvbG9yOiB0cmFuc3BhcmVudFxuICB0ZXh0LXNoYWRvdzogMCAwIDAgZ3JheVxuXG4uc3RhdXM6Zm9jdXNcbiAgb3V0bGluZTogbm9uZVxuICBmaWx0ZXI6IGJsdXIoMjBweClcbjo6bmctZGVlcCBuZ3gtYXZhdGFyIGRpdi5hdmF0YXItY29udGFpbmVyXG4gIG1hcmdpbi10b3A6IDBcbiAgbWFyZ2luLWxlZnQ6IDI1cHhcblxuLnVuYXNzaWduX2ljb25cbiAgZGlzcGxheTogbm9uZVxuXG4uYXNzaWduZWVfbGlzdFxuICAmOmhvdmVyXG4gICAgLnVuYXNzaWduX2ljb25cbiAgICAgIGRpc3BsYXk6IGlubGluZVxuICAgICAgY3Vyc29yOiBwb2ludGVyXG4iXX0= */"

/***/ }),

/***/ "./src/app/process/group/group.component.ts":
/*!**************************************************!*\
  !*** ./src/app/process/group/group.component.ts ***!
  \**************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! proflo-process-lib/lib/actions */ "./node_modules/proflo-process-lib/lib/actions.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/initializer/type-initializer */ "./src/app/initializer/type-initializer.ts");
/* harmony import */ var src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/socket/SocketCommunication */ "./src/app/socket/SocketCommunication.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
// import { Component, Input, OnInit, OnDestroy } from '@angular/core';
// import { NgRedux, select } from '@angular-redux/store';
// import { PaletteTileEventArgs, ColorPickerEventArgs } from '@syncfusion/ej2-inputs';
// import { addClass } from '@syncfusion/ej2-base';
// import { Status, Row, Board, Column, Group, BoardState} from 'proflo-process-lib/lib/types';
// import {
//   updateTask, deleteGroup, deleteColumn, addRow, deleteRow,
//   addStatus, deleteStatus, updateStatus, moveRow, setGroupName, setGroupColor,
//   setColumnName
// } from 'proflo-process-lib/lib/actions';
// import { rowInitializer, statusInitializer } from 'src/app/initializer/type-initializer';
// import { SocketCommunication } from 'src/app/socket/SocketCommunication';
// import { Observable } from 'rxjs';
// import { ToastrManager } from 'ng6-toastr-notifications';
//
// @Component({
//   selector: 'app-group',
//   templateUrl: './group.component.html',
//   styleUrls: ['./group.component.sass']
// })
// export class GroupComponent implements OnInit, OnDestroy {
//
//   @select() boards$: Observable<BoardState>;
//   @select() currentOpenBoard$: Observable<Board>;
//   @select() boardGroups;
//   @Input() groupId;
//   public socket;
//   public group: Group;
//   public displayedColumns: Column[] = [];
//   public board: Board;
//   public row: any;
//   public boardList: Board[] = [];
//   public anotherGroups: Group[] = [];
//   public label: string;
//   public color: any;
//   public labelList: Status[] = [];
//
//   public groupColor: Group.groupColor;
//   // To specify number of columns to be rendered.
//   public colCount = 4;
//
//   // Triggers before rendering each palette tile.
//   public customColors: { [key: string]: string[] } =
//       { custom1: ['#e04567', '#399667', '#FFD24C', '#85D5FB', '#9373D9', '#999999', '#459CCB', '#FB7D4B'] };
//
//   constructor(
//       private ngRedux: NgRedux<BoardState>,
//       public toastr: ToastrManager,
//       private socketService: SocketCommunication
//   ) {
//     this.socket = this.socketService.getSocket();
//   }
//
//   ngOnInit() {
//
//     this.currentOpenBoard$.subscribe((result: Board) => {
//       if (result) {
//         console.log('the board has changed....', result);
//         this.board = result;
//         this.group = result.boardGroups.filter(tempGroup => tempGroup.groupId === this.groupId)[0];
//         this.displayedColumns = this.board.boardColumns;
//         this.labelList = this.board.boardStatusColumn;
//       }
//     });
//   }
//
//   ngOnDestroy() {
//     // console.log("********This is destroyed")
//     // this.currentOpenBoard$.unsubscribe();
//     // this.boards$.unsubscribe();
//   }
//   showSuccess(msg: string, position: string = 'bottom-right', animate: string = 'slideFromRight', toastTimeout: number = 2000) {
//     this.toastr.successToastr(msg, 'Success!', {
//       position,
//       animate,
//       toastTimeout
//     });
//   }
//
//   showError() {
//     this.toastr.errorToastr('This is error toast.', 'Oops!');
//   }
//
//   showWarning() {
//     this.toastr.warningToastr('This is warning toast.', 'Alert!');
//   }
//   // Method to add a row in group when input box losses it's focus
//   onAddRow($event): void {
//     if ($event.target.value !== '') {
//       const newRow = rowInitializer(this.displayedColumns, $event.target.value);
//       this.ngRedux.dispatch(addRow(this.board.boardId, this.groupId, newRow));
//       this.socket.emit('@@proflo-types/ADD_ROW', addRow(this.board.boardId, this.groupId, newRow));
//       $event.target.value = '';
//     }
//   }
//
//   // Method to delete a row in group
//   onDeleteRow(row: Row): void {
//     this.ngRedux.dispatch(deleteRow(this.board.boardId, this.groupId, row.rowId));
//     this.socket.emit('@@proflo-types/DELETE_ROW', deleteRow(this.board.boardId, this.groupId, row.rowId));
//     this.showSuccess('Row deleted successfully');
//   }
//
//   // Method to add a row in group when ENTER key has pressed
//   onAddRowByEnter($event: any): void {
//     const key = $event.key || $event.keyCode;
//     if (key === 'Enter' || key === 13) {
//       if ($event.target.value !== '') {
//         const newRow = rowInitializer(this.displayedColumns, $event.target.value);
//         console.log('going to add a row...', newRow);
//         this.ngRedux.dispatch(addRow(this.board.boardId, this.groupId, newRow));
//         this.socket.emit('@@proflo-types/ADD_ROW', addRow(this.board.boardId, this.groupId, newRow));
//         $event.target.value = '';
//         console.log('$$$$$$$$Inside emit event');
//       }
//     }
//   }
//
//   // Method to change the value of a particular cell
//   onUpdateRowValue(updatedRowId: string, updatedCellId: string, $event): void {
//     const key = $event.key || $event.keyCode;
//     if (key === 'Enter' || key === 13 && $event.targer.value !== '') {
//       this.ngRedux.dispatch(updateTask(this.board.boardId, this.groupId, updatedRowId, updatedCellId, $event.target.value));
//       this.socket.emit('@@proflo-types/UPDATE_TASK', updateTask(this.board.boardId,
//           this.groupId, updatedRowId, updatedCellId, $event.target.value));
//     }
//   }
//
//   // Method to delete a column from a board
//   onDeleteColumn(column: Column): void {
//     this.ngRedux.dispatch(deleteColumn(this.board.boardId, column.columnId));
//     this.socket.emit('@@proflo-types/DELETE_COLUMN', deleteColumn(this.board.boardId, column.columnId));
//     this.showSuccess('Column deleted successfully');
//   }
//
//
//   onDeleteGroup(board: Board, group: Group): void {
//     console.log('deleting group....');
//     this.ngRedux.dispatch(deleteGroup(board.boardId, group.groupId));
//     this.socket.emit('@@proflo-types/DELETE_GROUP', deleteGroup(board.boardId, group.groupId));
//     this.showSuccess('Group deleted successfully');
//   }
//
//
//   onMoveRow(group: Group, row: Row): void {
//     this.ngRedux.dispatch(moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId));
//     this.socket.emit('@@proflo-types/MOVE_ROW', moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId));
//   }
//
//   onChangeGroupName($event) {
//     const key = $event.key || $event.keyCode;
//     if (key === 'Enter' || key === 13) {
//       if ($event.target.value !== '') {
//         this.ngRedux.dispatch(setGroupName(this.board.boardId, this.groupId, $event.target.value));
//         this.socket.emit('@@proflo-types/SET_GROUP_NAME', setGroupName(this.board.boardId, this.groupId, $event.target.value));
//         $event.target.value = '';
//       }
//     }
//   }
//
//
//   onChangeGroupColor(color: string) {
//     console.log('color:', color);
//     // const key = $event.key || $event.keyCode;
//     // if (key === 'Enter' || key === 13) {
//     if (color !== '') {
//       this.ngRedux.dispatch(setGroupColor(this.board.boardId, this.groupId, color));
//       console.log(this.group);
//     }
//   }
//
//   onChangeColumnName(columnId: string, $event) {
//     const key = $event.key || $event.keyCode;
//     if (key === 'Enter' || key === 13) {
//       if ($event.target.value !== '') {
//         this.ngRedux.dispatch(setColumnName(this.board.boardId, columnId, $event.target.value));
//         this.socket.emit('@@proflo-types/SET_COLUMN_NAME', setColumnName(this.board.boardId, columnId, $event.target.value));
//         $event.target.value = '';
//       }
//     }
//   }
//
//   // // ======================      Status column code    ===========================]
//
//   public tileRender(args: PaletteTileEventArgs): void {
//     addClass([args.element], ['e-icons', 'e-custom-tile']);
//   }
//
//   // Triggers while selecting colors from palette.
//   public onChange(args: ColorPickerEventArgs): void {
//     document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
//     this.color = args.currentValue.hex;
//   }
//
//   createStatus() {
//     if (this.label && this.color) {
//       const newStatus = statusInitializer();
//       newStatus.label = this.label;
//       newStatus.color = this.color;
//       this.ngRedux.dispatch(addStatus(this.board.boardId, newStatus));
//       console.log('sending status...');
//       this.socket.emit('@@proflo-types/ADD_STATUS', addStatus(this.board.boardId, newStatus));
//     }
//   }
//
//   deleteStatus(position: number) {
//     this.ngRedux.dispatch(deleteStatus(this.board.boardId, position));
//     this.socket.emit('@@proflo-types/DELETE_STATUS', deleteStatus(this.board.boardId, position));
//   }
//
//   onSaveData(rowId, cellId, label, color) {
//     const status = statusInitializer();
//     status.label = label;
//     status.color = color;
//     this.ngRedux.dispatch(updateStatus(this.board.boardId, this.groupId, rowId, cellId, status));
//     this.socket.emit('@@proflo-types/UPDATE_STATUS', updateStatus(this.board.boardId, this.groupId, rowId, cellId, status));
//   }
// }









let GroupComponent = class GroupComponent {
    constructor(ngRedux, socketService, toastr, storage) {
        this.ngRedux = ngRedux;
        this.socketService = socketService;
        this.toastr = toastr;
        this.storage = storage;
        this.displayedColumns = [];
        this.boardList = [];
        this.anotherGroups = [];
        this.displayedGroups = [];
        this.labelList = [];
        // To specify number of columns to be rendered.
        this.colCount = 4;
        // Triggers before rendering each palette tile.
        this.customColors = { custom1: ['#e04567', '#399667', '#FFD24C', '#85D5FB', '#9373D9', '#999999', '#459CCB', '#FB7D4B'] };
        this.socket = this.socketService.getSocket();
    }
    ngOnInit() {
        this.userId = this.storage.get('userInformation').userId;
        this.displayedGroups = this.groups;
        this.currentOpenBoard$.subscribe((result) => {
            if (result) {
                console.log('the board has changed....', result);
                this.board = result;
                this.group = result.boardGroups.filter(tempGroup => tempGroup.groupId === this.groupId)[0];
                this.displayedColumns = this.board.boardColumns;
                this.labelList = this.board.boardStatusColumn;
                this.boardSubscribers = this.board.boardSubscribers;
                this.displayedGroups = this.board.boardGroups;
            }
        });
    }
    ngOnDestroy() { }
    // Method to add a row in group when input box losses it's focus
    onAddRow($event) {
        if ($event.target.value !== '') {
            const newRow = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_5__["rowInitializer"])(this.displayedColumns, $event.target.value);
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addRow"])(this.board.boardId, this.groupId, newRow));
            this.socket.emit('@@proflo-types/ADD_ROW', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addRow"])(this.board.boardId, this.groupId, newRow), subscriberId: this.userId });
            $event.target.value = '';
        }
    }
    showSuccess(msg, position = 'bottom-right', animate = 'slideFromRight', toastTimeout = 2000) {
        this.toastr.successToastr(msg, 'Success!', {
            position,
            animate,
            toastTimeout
        });
    }
    showError() {
        this.toastr.errorToastr('This is error toast.', 'Oops!');
    }
    showWarning() {
        this.toastr.warningToastr('This is warning toast.', 'Alert!');
    }
    // Method to delete a row in group
    onDeleteRow(row) {
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRow"])(this.board.boardId, this.groupId, row.rowId));
        this.socket.emit('@@proflo-types/DELETE_ROW', Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRow"])(this.board.boardId, this.groupId, row.rowId));
        this.showSuccess('Row deleted successfully');
    }
    // Method to add a row in group when ENTER key has pressed
    onAddRowByEnter($event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13) {
            if ($event.target.value !== '') {
                const newRow = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_5__["rowInitializer"])(this.displayedColumns, $event.target.value);
                console.log('going to add a row...', newRow);
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addRow"])(this.board.boardId, this.groupId, newRow));
                this.socket.emit('@@proflo-types/ADD_ROW', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addRow"])(this.board.boardId, this.groupId, newRow), subscriberId: this.userId });
                $event.target.value = '';
                console.log('$$$$$$$$Inside emit event');
            }
        }
    }
    // Method to change the value of a particular cell
    onUpdateRowValue(updatedRowId, updatedCellId, $event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13 && $event.targer.value !== '') {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["updateTask"])(this.board.boardId, this.groupId, updatedRowId, updatedCellId, $event.target.value));
            this.socket.emit('@@proflo-types/UPDATE_TASK', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["updateTask"])(this.board.boardId, this.groupId, updatedRowId, updatedCellId, $event.target.value), subscriberId: this.userId });
        }
        ;
    }
    // Method to delete a column from a board
    onDeleteColumn(column) {
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumn"])(this.board.boardId, column.columnId));
        this.socket.emit('@@proflo-types/DELETE_COLUMN', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteColumn"])(this.board.boardId, column.columnId), subscriberId: this.userId });
        this.showSuccess('Column deleted successfully');
    }
    onDeleteGroup(board, group) {
        console.log('deleting group....');
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteGroup"])(board.boardId, group.groupId));
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteGroup"])(board.boardId, group.groupId));
        this.socket.emit('@@proflo-types/DELETE_GROUP', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteGroup"])(board.boardId, group.groupId), subscriberId: this.userId });
        this.showSuccess('Group deleted successfully');
    }
    //TODO for move row
    onMoveRow(group, row) {
        console.log('moving row');
        // this.ngRedux.dispatch(moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId))
        // this.socket.emit('@@proflo-types/MOVE_ROW', {action: moveRow(this.board.boardId, this.groupId, group.groupId, row.rowId), subscriberId: this.userId})
    }
    onChangeGroupName($event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13) {
            if ($event.target.value !== '') {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setGroupName"])(this.board.boardId, this.groupId, $event.target.value));
                this.socket.emit('@@proflo-types/SET_GROUP_NAME', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setGroupName"])(this.board.boardId, this.groupId, $event.target.value), subscriberId: this.userId });
                $event.target.value = '';
            }
        }
    }
    onChangeGroupColor(color) {
        console.log('color:', color);
        // const key = $event.key || $event.keyCode;
        // if (key === 'Enter' || key === 13) {
        if (color !== '') {
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setGroupColor"])(this.board.boardId, this.groupId, color));
            console.log(this.group);
        }
    }
    onChangeColumnName(columnId, $event) {
        const key = $event.key || $event.keyCode;
        if (key === 'Enter' || key === 13) {
            if ($event.target.value !== '') {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setColumnName"])(this.board.boardId, columnId, $event.target.value));
                this.socket.emit('@@proflo-types/SET_COLUMN_NAME', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["setColumnName"])(this.board.boardId, columnId, $event.target.value), subscriberId: this.userId });
                $event.target.value = '';
            }
        }
    }
    // // ======================      Status column code    ===========================]
    tileRender(args) {
        Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_3__["addClass"])([args.element], ['e-icons', 'e-custom-tile']);
    }
    // Triggers while selecting colors from palette.
    onChange(args) {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
        this.color = args.currentValue.hex;
    }
    createStatus() {
        if (this.label && this.color) {
            const newStatus = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_5__["statusInitializer"])();
            newStatus.label = this.label;
            newStatus.color = this.color;
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addStatus"])(this.board.boardId, newStatus));
            console.log('sending status...');
            this.socket.emit('@@proflo-types/ADD_STATUS', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["addStatus"])(this.board.boardId, newStatus), subscriberId: this.userId });
        }
    }
    deleteStatus(position) {
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteStatus"])(this.board.boardId, position));
        this.socket.emit('@@proflo-types/DELETE_STATUS', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["deleteStatus"])(this.board.boardId, position), subscriberId: this.userId });
    }
    onSaveData(rowId, cellId, label, color) {
        const status = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_5__["statusInitializer"])();
        status.label = label;
        status.color = color;
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["updateStatus"])(this.board.boardId, this.groupId, rowId, cellId, status));
        this.socket.emit('@@proflo-types/UPDATE_STATUS', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["updateStatus"])(this.board.boardId, this.groupId, rowId, cellId, status), subscriberId: this.userId });
    }
    onAssignTask(cellId, rowId, profileUrl) {
        console.log(cellId, rowId, profileUrl);
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["assignTask"])(this.board.boardId, this.groupId, rowId, cellId, profileUrl));
        this.socket.emit('@@proflo-types/ASSIGN_TASK', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["assignTask"])(this.board.boardId, this.groupId, rowId, cellId, profileUrl), subscriberId: this.userId });
    }
    onUnassignTask(rowId, cellId) {
        this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["unassignTask"])(this.board.boardId, this.groupId, rowId, cellId));
        this.socket.emit('@@proflo-types/ASSIGN_TASK', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_4__["unassignTask"])(this.board.boardId, this.groupId, rowId, cellId), subscriberId: this.userId });
    }
};
GroupComponent.ctorParameters = () => [
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"] },
    { type: src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_6__["SocketCommunication"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["SESSION_STORAGE"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], GroupComponent.prototype, "boards$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], GroupComponent.prototype, "currentOpenBoard$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["select"])()
], GroupComponent.prototype, "boardGroups", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GroupComponent.prototype, "groupId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], GroupComponent.prototype, "groups", void 0);
GroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group',
        template: __webpack_require__(/*! raw-loader!./group.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/group/group.component.html"),
        styles: [__webpack_require__(/*! ./group.component.sass */ "./src/app/process/group/group.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_8__["SESSION_STORAGE"]))
], GroupComponent);



/***/ }),

/***/ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.sass":
/*!******************************************************************************************!*\
  !*** ./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.sass ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-actions {\n  justify-content: flex-end;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL2ltcG9ydC1mcm9tLWV4Y2VsLWRpYWxvZy9pbXBvcnQtZnJvbS1leGNlbC1kaWFsb2cuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3Byb2Nlc3MvaW1wb3J0LWZyb20tZXhjZWwtZGlhbG9nL2ltcG9ydC1mcm9tLWV4Y2VsLWRpYWxvZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzL2ltcG9ydC1mcm9tLWV4Y2VsLWRpYWxvZy9pbXBvcnQtZnJvbS1leGNlbC1kaWFsb2cuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnNcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZFxuXG5tYXQtZm9ybS1maWVsZFxuICB3aWR0aDogMTAwJVxuIiwibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ImportFromExcelDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportFromExcelDialogComponent", function() { return ImportFromExcelDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ImportFromExcelDialogComponent = class ImportFromExcelDialogComponent {
    constructor() { }
    ngOnInit() {
    }
};
ImportFromExcelDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-import-from-excel-dialog',
        template: __webpack_require__(/*! raw-loader!./import-from-excel-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.html"),
        styles: [__webpack_require__(/*! ./import-from-excel-dialog.component.sass */ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.sass")]
    })
], ImportFromExcelDialogComponent);



/***/ }),

/***/ "./src/app/process/page-not-found/page-not-found.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/process/page-not-found/page-not-found.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: green;\n  position: fixed;\n  top: 30%;\n  left: 50%;\n}\n\np {\n  color: brown;\n  text-align: center;\n  position: fixed;\n  top: 43%;\n  left: 38%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zYXNzIiwic3JjL2FwcC9wcm9jZXNzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaDFcbiAgY29sb3I6IGdyZWVuXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDMwJVxuICBsZWZ0OiA1MCVcblxucFxuICBjb2xvcjogYnJvd25cbiAgdGV4dC1hbGlnbjogY2VudGVyXG4gIHBvc2l0aW9uOiBmaXhlZFxuICB0b3A6IDQzJVxuICBsZWZ0OiAzOCVcbiIsImgxIHtcbiAgY29sb3I6IGdyZWVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbnAge1xuICBjb2xvcjogYnJvd247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQzJTtcbiAgbGVmdDogMzglO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/process/page-not-found/page-not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/process/page-not-found/page-not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__(/*! ./page-not-found.component.sass */ "./src/app/process/page-not-found/page-not-found.component.sass")]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/process/process.module.ts":
/*!*******************************************!*\
  !*** ./src/app/process/process.module.ts ***!
  \*******************************************/
/*! exports provided: ProcessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessModule", function() { return ProcessModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/process/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board/board.component */ "./src/app/process/board/board.component.ts");
/* harmony import */ var _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-board-dialog/create-board-dialog.component */ "./src/app/process/create-board-dialog/create-board-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _group_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./group/group.component */ "./src/app/process/group/group.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/process/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/process/page-not-found/page-not-found.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ "./node_modules/@syncfusion/ej2-angular-inputs/@syncfusion/ej2-angular-inputs.js");
/* harmony import */ var _syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-base */ "./node_modules/@syncfusion/ej2-base/dist/es6/ej2-base.es2015.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./import-from-excel-dialog/import-from-excel-dialog.component */ "./src/app/process/import-from-excel-dialog/import-from-excel-dialog.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./slack-dialog/slack-dialog.component */ "./src/app/process/slack-dialog/slack-dialog.component.ts");



























Object(_syncfusion_ej2_base__WEBPACK_IMPORTED_MODULE_19__["enableRipple"])(true);
const avatarColors = ["#F90EB5", "#03CEF3", "#FF4600"];
let ProcessModule = class ProcessModule {
};
ProcessModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"],
            _board_board_component__WEBPACK_IMPORTED_MODULE_8__["BoardComponent"],
            _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CreateBoardDialogComponent"],
            _group_group_component__WEBPACK_IMPORTED_MODULE_13__["GroupComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"]
        ],
        imports: [
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_12__["NgReduxModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_25__["ColorPickerModule"],
            angular_webstorage_service__WEBPACK_IMPORTED_MODULE_22__["StorageServiceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot([]),
            ngx_avatar__WEBPACK_IMPORTED_MODULE_17__["AvatarModule"].forRoot({
                colors: avatarColors
            }),
            _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"]
        ],
        exports: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]],
        entryComponents: [
            _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CreateBoardDialogComponent"],
            _import_from_excel_dialog_import_from_excel_dialog_component__WEBPACK_IMPORTED_MODULE_24__["ImportFromExcelDialogComponent"],
            _slack_dialog_slack_dialog_component__WEBPACK_IMPORTED_MODULE_26__["SlackDialogComponent"]
        ],
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_21__["CookieService"]],
        bootstrap: []
    })
], ProcessModule);



/***/ }),

/***/ "./src/app/process/sidebar/sidebar.component.sass":
/*!********************************************************!*\
  !*** ./src/app/process/sidebar/sidebar.component.sass ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  background-color: #FFFFFF;\n}\n\n.sidenav {\n  min-width: 250px;\n}\n\n.logoHeader {\n  height: 25%;\n  padding: 8%;\n  margin-top: 25%;\n}\n\n::ng-deep > .user-avatar {\n  margin: 30% auto 0 auto;\n  position: relative;\n  text-align: center;\n}\n\n.user-name {\n  color: white;\n  margin: 20px auto 0 auto;\n  text-align: center;\n}\n\n.user-email {\n  color: lightblue;\n  margin: 5px auto 0 auto;\n  font-size: 14px;\n  text-align: center;\n}\n\n.sidenav {\n  width: 200px;\n  background-color: #24344c;\n}\n\nspan {\n  color: lightgrey;\n}\n\n.mat-icon {\n  color: rgba(211, 211, 211, 0.7);\n}\n\n::ng-deep mat-nav-list {\n  height: 60%;\n}\n\n.line {\n  background-color: rgba(211, 211, 211, 0.2);\n  margin: 0 5px;\n}\n\n.mat-nav-list a span {\n  margin-left: 5px;\n  color: rgba(211, 211, 211, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2FzcyIsInNyYy9hcHAvcHJvY2Vzcy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSx5QkFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsK0JBQUE7QUNRRjs7QUROQTtFQUNFLFdBQUE7QUNTRjs7QURQQTtFQUNFLDBDQUFBO0VBQ0EsYUFBQTtBQ1VGOztBRFJBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvcHJvY2Vzcy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXJcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGXG5cbi5zaWRlbmF2XG4gIG1pbi13aWR0aDogMjUwcHhcblxuLmxvZ29IZWFkZXJcbiAgaGVpZ2h0OiAyNSVcbiAgcGFkZGluZzogOCVcbiAgbWFyZ2luLXRvcDogMjUlXG5cbjo6bmctZGVlcCA+IC51c2VyLWF2YXRhclxuICBtYXJnaW46IDMwJSBhdXRvIDAgYXV0b1xuICBwb3NpdGlvbjogcmVsYXRpdmVcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi51c2VyLW5hbWVcbiAgY29sb3I6IHdoaXRlXG4gIG1hcmdpbjogMjBweCBhdXRvIDAgYXV0b1xuICB0ZXh0LWFsaWduOiBjZW50ZXJcblxuLnVzZXItZW1haWxcbiAgY29sb3I6IGxpZ2h0Ymx1ZVxuICBtYXJnaW46IDVweCBhdXRvIDAgYXV0b1xuICBmb250LXNpemU6IDE0cHhcbiAgdGV4dC1hbGlnbjogY2VudGVyXG5cbi5zaWRlbmF2XG4gIHdpZHRoOiAyMDBweFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzNDRjXG5cbnNwYW5cbiAgY29sb3I6IGxpZ2h0Z3JleVxuXG4ubWF0LWljb25cbiAgY29sb3I6IHJnYmEoMjExLDIxMSwyMTEsIDAuNylcblxuOjpuZy1kZWVwIG1hdC1uYXYtbGlzdFxuICBoZWlnaHQ6IDYwJVxuXG4ubGluZVxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwyMTEsMjExLDAuMilcbiAgbWFyZ2luOiAwIDVweFxuXG4ubWF0LW5hdi1saXN0IGEgc3BhblxuICBtYXJnaW4tbGVmdDogNXB4XG4gIGNvbG9yOiByZ2JhKDIxMSwyMTEsMjExLCAwLjcpXG5cbi8vICNteVNpZGVuYXZJY29uIGlcbi8vICAgcG9zaXRpb246IGFic29sdXRlXG4vLyAgIHRvcDogNTBweFxuLy8gICBsZWZ0OiAxMDBweFxuLy8gICB0cmFuc2l0aW9uOiAwLjNzXG4vLyAgIHBhZGRpbmc6IDIzcHhcbi8vICAgd2lkdGg6IDIwcHhcbi8vICAgaGVpZ2h0OiAyMHB4XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxuLy8gICBmb250LXNpemU6IDMycHhcbi8vICAgY29sb3I6IHdoaXRlXG4vLyAgIGJvcmRlci1yYWRpdXM6IDEwcHhcbiIsIi5zaWRlbmF2LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbi5zaWRlbmF2IHtcbiAgbWluLXdpZHRoOiAyNTBweDtcbn1cblxuLmxvZ29IZWFkZXIge1xuICBoZWlnaHQ6IDI1JTtcbiAgcGFkZGluZzogOCU7XG4gIG1hcmdpbi10b3A6IDI1JTtcbn1cblxuOjpuZy1kZWVwID4gLnVzZXItYXZhdGFyIHtcbiAgbWFyZ2luOiAzMCUgYXV0byAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1uYW1lIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDIwcHggYXV0byAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXItZW1haWwge1xuICBjb2xvcjogbGlnaHRibHVlO1xuICBtYXJnaW46IDVweCBhdXRvIDAgYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQzNDRjO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbn1cblxuLm1hdC1pY29uIHtcbiAgY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC43KTtcbn1cblxuOjpuZy1kZWVwIG1hdC1uYXYtbGlzdCB7XG4gIGhlaWdodDogNjAlO1xufVxuXG4ubGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCAyMTEsIDIxMSwgMC4yKTtcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLm1hdC1uYXYtbGlzdCBhIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjcpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/process/sidebar/sidebar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/process/sidebar/sidebar.component.ts ***!
  \******************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/fesm2015/angular-redux-store.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! proflo-process-lib/lib/actions */ "./node_modules/proflo-process-lib/lib/actions.js");
/* harmony import */ var proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create-board-dialog/create-board-dialog.component */ "./src/app/process/create-board-dialog/create-board-dialog.component.ts");
/* harmony import */ var src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/initializer/type-initializer */ "./src/app/initializer/type-initializer.ts");
/* harmony import */ var src_app_services_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/board.service */ "./src/app/services/board.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/socket/SocketCommunication */ "./src/app/socket/SocketCommunication.ts");
// import { Component, OnInit, Inject, OnDestroy } from "@angular/core";
// import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
// import { Observable } from "rxjs";
// import { map, shareReplay } from "rxjs/operators";
// import { NgRedux, select } from "@angular-redux/store";
// import { MatDialog } from "@angular/material/dialog";
// import { Router, ActivatedRoute } from "@angular/router";
// import { BoardState, Board } from "proflo-process-lib/lib/types";
// import {
//   addBoard,
//   setCurrentOpenBoard,
//   setBoardList
// } from "proflo-process-lib/lib/actions";
// import { BoardList } from "proflo-process-lib/lib/types";
// import { CreateBoardDialogComponent } from "../create-board-dialog/create-board-dialog.component";
// import {
//   boardInitializer,
//   subscriberInititalizer
// } from "src/app/initializer/type-initializer";
// import { BoardService } from "src/app/services/board.service";
// import { WebStorageService, SESSION_STORAGE } from "angular-webstorage-service";
// import { CookieService } from "ngx-cookie-service";
// import { NgxSpinnerService } from "ngx-spinner";
// import { SocketCommunication } from "src/app/socket/SocketCommunication";

// @Component({
//   selector: "app-sidebar",
//   templateUrl: "./sidebar.component.html",
//   styleUrls: ["./sidebar.component.sass"]
// })
// export class SidebarComponent implements OnInit, OnDestroy {
//   @select() boards$: Observable<BoardState>;
//   @select() currentOpenBoard$: Observable<Board>;
//   public boards: BoardList;
//   public userName: string;
//   public userEmail: string;
//   public userId: string;
//   public userProfile: string;
//   public socket;
//   public isUserDetailsLoaded = false;
//   // Here isHandSet$ Observer will observe the current window screen size and show/hide the sidebar according to that
//   isHandset$: Observable<boolean> = this.breakpointObserver
//     .observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );
//   constructor(
//     private breakpointObserver: BreakpointObserver,
//     private ngRedux: NgRedux<BoardState>,
//     private dialog: MatDialog,
//     private router: Router,
//     private service: BoardService,
//     private cookie: CookieService,
//     private spinner: NgxSpinnerService,
//     private socketService: SocketCommunication,
//     @Inject(SESSION_STORAGE) private storage: WebStorageService
//   ) {}
//   ngOnInit() {
//     this.socket = this.socketService.getSocket();
//     this.spinner.show();
//     // Retrieve the token from cookie
//     const token = this.cookie.get("__planage");
//     // Retrieve the user email from jwt token retrieved from cookie
//     this.userEmail = JSON.parse(atob(token.split(".")[1])).email;
//     // call rest api to get the user details from server
//     this.service.getUserDetails(this.userEmail).subscribe(result => {
//       // store the user information in session storage
//       this.storage.set("userInformation", result);
//       // set userEmail and userName
//       this.userEmail = JSON.parse(JSON.stringify(result)).userEmail;
//       this.userName = JSON.parse(JSON.stringify(result)).userName;
//       this.userId = JSON.parse(JSON.stringify(result)).userId;
//       this.userProfile = JSON.parse(JSON.stringify(result)).userProfile;
//       // dispatch an action to set the boardlist
//       this.ngRedux.dispatch(
//         setBoardList(JSON.parse(JSON.stringify(result)).boardList)
//       );
//       this.isUserDetailsLoaded = true;
//       // load spinner for 2 seconds after data is completely loaded.
//       setTimeout(() => {
//         /** spinner ends after 2 seconds */
//         this.spinner.hide();
//       }, 2000);
//     });
//     // subscribe to boardList so that any changes in boardList can be reflected here
//     this.boards$.subscribe(result => {
//       this.boards = result;
//     });
//   }
//   ngOnDestroy() {
//     //   this.currentOpenBoard$.unsubscribe();
//     //   this.boards$.unsubscribe();
//   }
//   // create a board
//   onCreateBoard(): void {
//     const dialogRef = this.dialog.open(CreateBoardDialogComponent, {
//       width: "400px"
//     });
//     // Get the board name from dialog input box
//     dialogRef.afterClosed().subscribe((result: string) => {
//       if (result) {
//         // initialize board details from boardInitializer
//         const owner = subscriberInititalizer(
//           this.userId,
//           this.userName,
//           this.userEmail,
//           this.userProfile
//         );
//         const newBoard = boardInitializer(
//           result,
//           this.userEmail,
//           this.userName,
//           owner
//         );
//         // dispatch an action to create an board
//         this.ngRedux.dispatch(addBoard(newBoard));
//         this.socket.emit("@@proflo-types/ADD_BOARD", addBoard(newBoard));
//         // redirect to board component
//         // this.router.navigate(['/board', newBoard.boardId]);
//       }
//     });
//   }
//   // call openBoard() whenever user click on any board from boardList.
//   onOpenBoard(boardId) {
//     this.spinner.show();
//     // Retrieve the board from server by boardId.
//     this.service.getBoard(boardId).subscribe((result: Board) => {
//       this.spinner.hide();
//       if (result.length !== 0) {
//         this.ngRedux.dispatch(setCurrentOpenBoard(result[0]));
//         this.router.navigate(["/board", boardId]);
//       } else {
//         this.router.navigate(["/pagenotfound"]);
//       }
//     });
//   }
// }














let SidebarComponent = class SidebarComponent {
    constructor(breakpointObserver, ngRedux, dialog, router, service, cookie, spinner, socketService, storage) {
        this.breakpointObserver = breakpointObserver;
        this.ngRedux = ngRedux;
        this.dialog = dialog;
        this.router = router;
        this.service = service;
        this.cookie = cookie;
        this.spinner = spinner;
        this.socketService = socketService;
        this.storage = storage;
        this.isUserDetailsLoaded = false;
        // Here isHandSet$ Observer will observe the current window screen size and show/hide the sidebar according to that
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])());
    }
    ngOnInit() {
        this.socket = this.socketService.getSocket();
        this.spinner.show();
        // Retrieve the token from cookie
        const token = this.cookie.get("__planage_process");
        // Retrieve the user email from jwt token retrieved from cookie
        this.userEmail = JSON.parse(atob(token.split('.')[1])).email;
        // call rest api to get the user details from server
        this.service.getUserDetails(this.userEmail).subscribe(result => {
            // store the user information in session storage
            this.storage.set("userInformation", result);
            // set userEmail and userName
            this.userEmail = JSON.parse(JSON.stringify(result)).userEmail;
            this.userName = JSON.parse(JSON.stringify(result)).userName;
            this.userId = JSON.parse(JSON.stringify(result)).userId;
            this.userProfile = JSON.parse(JSON.stringify(result)).userProfile;
            // dispatch an action to set the boardlist
            this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__["setBoardList"])(JSON.parse(JSON.stringify(result)).boardList));
            this.isUserDetailsLoaded = true;
            // load spinner for 2 seconds after data is completely loaded.
            setTimeout(() => {
                /** spinner ends after 2 seconds */
                this.spinner.hide();
            }, 2000);
        });
        // subscribe to boardList so that any changes in boardList can be reflected here
        this.boards$.subscribe(result => {
            this.boards = result;
        });
    }
    ngOnDestroy() {
        //   this.currentOpenBoard$.unsubscribe();
        //   this.boards$.unsubscribe();
    }
    // create a board
    onCreateBoard() {
        const dialogRef = this.dialog.open(_create_board_dialog_create_board_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateBoardDialogComponent"], {
            width: "400px"
        });
        // Get the board name from dialog input box
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                // initialize board details from boardInitializer
                const owner = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_9__["subscriberInititalizer"])(this.userId, this.userName, this.userEmail, this.userProfile);
                const newBoard = Object(src_app_initializer_type_initializer__WEBPACK_IMPORTED_MODULE_9__["boardInitializer"])(result, this.userEmail, this.userName, owner);
                //dispatch an action to create an board
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__["addBoard"])(newBoard));
                this.socket.emit('@@proflo-types/ADD_BOARD', { action: Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__["addBoard"])(newBoard), subscriberId: this.userId }, () => {
                    console.log('callback came now redirecting');
                    // redirect to board component
                    this.router.navigate(['/board', newBoard.boardId]);
                });
            }
        });
    }
    // call openBoard() whenever user click on any board from boardList.
    onOpenBoard(boardId) {
        this.spinner.show();
        // Retrieve the board from server by boardId.
        this.service.getBoard(boardId, this.userId).subscribe((result) => {
            this.spinner.hide();
            if (result.length !== 0) {
                this.ngRedux.dispatch(Object(proflo_process_lib_lib_actions__WEBPACK_IMPORTED_MODULE_7__["setCurrentOpenBoard"])(result[0]));
                this.router.navigate(['/board', boardId]);
            }
        }, (error) => {
            console.log('sending to page not found from side bar open click');
            this.router.navigate(['/pagenotfound']);
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"] },
    { type: _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_board_service__WEBPACK_IMPORTED_MODULE_10__["BoardService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_13__["NgxSpinnerService"] },
    { type: src_app_socket_SocketCommunication__WEBPACK_IMPORTED_MODULE_14__["SocketCommunication"] },
    { type: angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["WebStorageService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["SESSION_STORAGE"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["select"])()
], SidebarComponent.prototype, "boards$", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["select"])()
], SidebarComponent.prototype, "currentOpenBoard$", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sidebar",
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.sass */ "./src/app/process/sidebar/sidebar.component.sass")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["SESSION_STORAGE"]))
], SidebarComponent);



/***/ }),

/***/ "./src/app/process/slack-dialog/slack-dialog.component.sass":
/*!******************************************************************!*\
  !*** ./src/app/process/slack-dialog/slack-dialog.component.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-actions {\n  justify-content: flex-end;\n}\n\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpdnlhbnNoL0Rlc2t0b3AvcGxhbmFnZSAoMSkvcGxhbmFnZS9wcm9jZXNzLW1hbmFnZXItdWkvdWkvc3JjL2FwcC9wcm9jZXNzL3NsYWNrLWRpYWxvZy9zbGFjay1kaWFsb2cuY29tcG9uZW50LnNhc3MiLCJzcmMvYXBwL3Byb2Nlc3Mvc2xhY2stZGlhbG9nL3NsYWNrLWRpYWxvZy5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxXQUFBO0FDRUQiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzL3NsYWNrLWRpYWxvZy9zbGFjay1kaWFsb2cuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnNcbiBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kXG5cbm1hdC1mb3JtLWZpZWxkXG4gd2lkdGg6IDEwMCVcbiIsIm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/process/slack-dialog/slack-dialog.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/process/slack-dialog/slack-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: SlackDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackDialogComponent", function() { return SlackDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let SlackDialogComponent = class SlackDialogComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.myGroup = this.formBuilder.group({
            webhook: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^https://hooks.slack.com/services/')
                ]
            ]
        });
    }
    ngOnInit() { }
};
SlackDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
SlackDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-slack-dialog",
        template: __webpack_require__(/*! raw-loader!./slack-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/process/slack-dialog/slack-dialog.component.html"),
        styles: [__webpack_require__(/*! ./slack-dialog.component.sass */ "./src/app/process/slack-dialog/slack-dialog.component.sass")]
    })
], SlackDialogComponent);



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _board_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board.service */ "./src/app/services/board.service.ts");




let AuthGuard = class AuthGuard {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.service.getUserAuthStatus()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _board_service__WEBPACK_IMPORTED_MODULE_3__["BoardService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/services/board.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/board.service.ts ***!
  \*******************************************/
/*! exports provided: BoardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardService", function() { return BoardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class BoardService {
//   private isUserAuthenticated: boolean = false;
//   private userServiceUrl: string = 'http://localhost:8080/api/v1/users';
//   private boardServiceUrl: string = 'http://localhost:8080/api/v1/boards';
//   constructor(public http: HttpClient) { }
//   getUserAuthStatus() {
//     return this.isUserAuthenticated;
//   }
//   setUserAuthStatus(status: boolean) {
//     this.isUserAuthenticated = status;
//   }
//   public getUserDetails(email: string) {
//     return this.http.get(`${this.userServiceUrl}/${email}/details`);
//   }
//   public getBoard(boardId: string) {
//     return this.http.get(`${this.boardServiceUrl}/${boardId}`);
//   }
//   public getAllUsers() {
//     return this.http.get(this.userServiceUrl);
//   }
//   public sendEmail(emailDetails) {
//     return this.http.post(this.userServiceUrl + '/email', emailDetails);
//   }
// }



let BoardService = class BoardService {
    constructor(http) {
        this.http = http;
        this.isUserAuthenticated = false;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/api/v1';
    }
    // private url: string = `${this.baseUrl}/api/v1`;
    getUserAuthStatus() {
        return this.isUserAuthenticated;
    }
    setUserAuthStatus(status) {
        this.isUserAuthenticated = status;
    }
    getUserDetails(email) {
        console.log('*****this is email details*****', this.baseUrl);
        return this.http.get(`${this.baseUrl}/users/${email}/details`);
    }
    getBoard(boardId, userId) {
        return this.http.get(`${this.baseUrl}/users/${userId}/boards/${boardId}`);
    }
    getAllUsers() {
        return this.http.get(`${this.baseUrl}/users`);
    }
    sendEmail(emailDetails) {
        return this.http.post(`${this.baseUrl}/users/email`, emailDetails);
    }
};
BoardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BoardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BoardService);



/***/ }),

/***/ "./src/app/socket/SocketCommunication.ts":
/*!***********************************************!*\
  !*** ./src/app/socket/SocketCommunication.ts ***!
  \***********************************************/
/*! exports provided: SocketCommunication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketCommunication", function() { return SocketCommunication; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let SocketCommunication = class SocketCommunication {
    constructor() {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nodeUrl}`);
    }
    getSocket() {
        console.log('returning socket');
        return this.socket;
    }
};
SocketCommunication = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocketCommunication);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "http://localhost:8080",
    nodeUrl: "http://localhost:3000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/divyansh/Desktop/planage (1)/planage/process-manager-ui/ui/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map