import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource, MatTreeModule } from '@angular/material/tree';
import { ApplicationStateStoreUtil } from '../../utils/application-state-store-util';
import { RedirectionUtil } from '../../utils/redirection-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../models/app-data/app-data.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../services/shared-events-service.service";
import * as i5 from "@angular/material/tree";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/common";
const _c0 = ["tree"];
const _c1 = (a0, a1) => ({ node: a0, currentState: a1 });
function ProgressBarRendererComponent_ng_container_3_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 7);
    i0.ɵɵelementContainer(1, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const progressElement_r3 = i0.ɵɵreference(7);
    i0.ɵɵclassMapInterpolate2("progressNode progressNode--", node_r1.currentState, " progressNode--", node_r1.nodeType, " mat-tree-node");
    i0.ɵɵattribute("data-display", ctx_r1.treeControlsData[node_r1.name])("aria-selected", node_r1.currentState === ctx_r1.applicationStates.STATE_ACTIVE ? "true" : "false");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", progressElement_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c1, node_r1, node_r1.currentState));
} }
function ProgressBarRendererComponent_ng_container_3_mat_nested_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-nested-tree-node")(1, "div", 9)(2, "button", 10)(3, "mat-icon", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainer(5, 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵelementContainer(7, 13);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const node_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const progressElement_r3 = i0.ɵɵreference(7);
    i0.ɵɵclassMapInterpolate2("progressNode progressNode--", node_r4.currentState, " progressNode--", node_r4.nodeType, " mat-tree-node");
    i0.ɵɵattribute("data-display", ctx_r1.treeControlsData[node_r4.name])("aria-selected", node_r4.currentState === ctx_r1.applicationStates.STATE_ACTIVE ? "true" : "false");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "toggle " + node_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r4) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", progressElement_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(12, _c1, node_r4, node_r4.currentState));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("cee-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r4));
} }
function ProgressBarRendererComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProgressBarRendererComponent_ng_container_3_mat_tree_node_1_Template, 2, 11, "mat-tree-node", 5)(2, ProgressBarRendererComponent_ng_container_3_mat_nested_tree_node_2_Template, 8, 15, "mat-nested-tree-node", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r1.hasChildTree);
} }
function ProgressBarRendererComponent_ng_template_4_mat_tree_node_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 16);
    i0.ɵɵelement(1, "button", 17);
    i0.ɵɵelementContainer(2, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const progressElement_r3 = i0.ɵɵreference(7);
    i0.ɵɵclassMapInterpolate2("progressNode progressNode--", node_r5.currentState, " progressNode--", node_r5.nodeType, " mat-tree-node");
    i0.ɵɵattribute("data-display", ctx_r1.treeControlsData[node_r5.name])("aria-selected", node_r5.currentState === ctx_r1.applicationStates.STATE_ACTIVE ? "true" : "false");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", progressElement_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c1, node_r5, node_r5.currentState));
} }
function ProgressBarRendererComponent_ng_template_4_mat_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 16)(1, "button", 10)(2, "mat-icon", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainer(4, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const progressElement_r3 = i0.ɵɵreference(7);
    i0.ɵɵclassMapInterpolate2("progressNode progressNode--", node_r6.currentState, " progressNode--", node_r6.nodeType, " mat-tree-node");
    i0.ɵɵattribute("data-display", ctx_r1.treeControlsData[node_r6.name])("aria-selected", node_r6.currentState === ctx_r1.applicationStates.STATE_ACTIVE ? "true" : "false");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "toggle " + node_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r6) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", progressElement_r3)("ngTemplateOutletContext", i0.ɵɵpureFunction2(10, _c1, node_r6, node_r6.currentState));
} }
function ProgressBarRendererComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProgressBarRendererComponent_ng_template_4_mat_tree_node_0_Template, 3, 11, "mat-tree-node", 14)(1, ProgressBarRendererComponent_ng_template_4_mat_tree_node_1_Template, 5, 13, "mat-tree-node", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r1.hasChild);
} }
function ProgressBarRendererComponent_ng_template_6_ng_container_1_img_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "img", 22);
    i0.ɵɵlistener("click", function ProgressBarRendererComponent_ng_template_6_ng_container_1_img_1_Template_img_click_0_listener() { i0.ɵɵrestoreView(_r7); const node_r8 = i0.ɵɵnextContext(2).node; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate(node_r8)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const node_r8 = ctx_r8.node;
    const currentState_r10 = ctx_r8.currentState;
    i0.ɵɵclassMapInterpolate2("progress-bar-element-image progress-bar-element-image--", currentState_r10, " progress-bar-element-image--", node_r8.nodeType, "");
    i0.ɵɵpropertyInterpolate("alt", node_r8.name + " " + currentState_r10 + " icon");
    i0.ɵɵproperty("src", node_r8["states"][currentState_r10]["state_icon"], i0.ɵɵsanitizeUrl);
} }
function ProgressBarRendererComponent_ng_template_6_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 23);
    i0.ɵɵlistener("click", function ProgressBarRendererComponent_ng_template_6_ng_container_1_label_2_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r11); const node_r8 = i0.ɵɵnextContext(2).node; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate(node_r8)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const node_r8 = ctx_r8.node;
    const currentState_r10 = ctx_r8.currentState;
    i0.ɵɵclassMapInterpolate2("progress-bar-element-name progress-bar-element-name--", currentState_r10, " progress-bar-element-name--", node_r8.nodeType, "");
    i0.ɵɵstyleProp("color", node_r8.states[currentState_r10].state_color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", node_r8.name, " ");
} }
function ProgressBarRendererComponent_ng_template_6_ng_container_1_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 24);
    i0.ɵɵlistener("click", function ProgressBarRendererComponent_ng_template_6_ng_container_1_label_3_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r12); const node_r8 = i0.ɵɵnextContext(2).node; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate(node_r8)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    const node_r8 = ctx_r8.node;
    const currentState_r10 = ctx_r8.currentState;
    i0.ɵɵclassMapInterpolate2("progress-bar-element-name progress-bar-element-name--", currentState_r10, " progress-bar-element-name--", node_r8.nodeType, "");
    i0.ɵɵstyleProp("color", node_r8.states[currentState_r10].state_color);
    i0.ɵɵproperty("innerHTML", node_r8.name, i0.ɵɵsanitizeHtml);
} }
function ProgressBarRendererComponent_ng_template_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ProgressBarRendererComponent_ng_template_6_ng_container_1_img_1_Template, 1, 6, "img", 19)(2, ProgressBarRendererComponent_ng_template_6_ng_container_1_label_2_Template, 2, 7, "label", 20)(3, ProgressBarRendererComponent_ng_template_6_ng_container_1_label_3_Template, 1, 7, "label", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const node_r8 = ctx_r8.node;
    const currentState_r10 = ctx_r8.currentState;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r8.states[currentState_r10].state_icon && node_r8.states[currentState_r10].state_style !== "color");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(node_r8.name) && node_r8.states[currentState_r10].state_style !== "icon");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(node_r8.name) && node_r8.states[currentState_r10].state_style !== "icon");
} }
function ProgressBarRendererComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ProgressBarRendererComponent_ng_template_6_ng_container_1_Template, 4, 3, "ng-container", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r8 = ctx.node;
    const currentState_r10 = ctx.currentState;
    i0.ɵɵclassMapInterpolate2("progress-bar-element progress-bar-element--", currentState_r10, " progress-bar-element--", node_r8.nodeType, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r8.states[currentState_r10]);
} }
export class ProgressBarRendererComponent {
    router;
    appDataService;
    apiDataService;
    sharedEventsService;
    progressBlock;
    stateIdMap;
    currentStep;
    applicationStates = {}; // application states
    stepIdMapStepName = {};
    stepNameMapStepId = {};
    navigationMap = {};
    applicationStateStoreUtil;
    redirectionUtil;
    progressBarDesign = '';
    isNestedTree = false;
    treeControl;
    treeControlsData = {};
    completedStepList = [];
    // tslint:disable-next-line: variable-name
    _transformer = (node, level) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            navigation: node.navigation,
            stepName: node.stepName,
            stepId: node.stepId,
            nodeType: node.nodeType,
            currentState: node.currentState,
            states: node.states,
            level
        };
    };
    // tslint:disable-next-line: member-ordering
    treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
    // tslint:disable-next-line: member-ordering
    dataSource;
    variableObj = {};
    conditionalUtil;
    constructor(router, appDataService, apiDataService, sharedEventsService) {
        this.router = router;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsService = sharedEventsService;
        this.applicationStateStoreUtil = new ApplicationStateStoreUtil(this.appDataService);
        this.redirectionUtil = new RedirectionUtil(router);
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
    }
    ngOnInit() {
        if (!this.progressBlock['response_api_key']) {
            this.progressBlock['response_api_key'] = "";
        }
        if (!this.progressBlock['request_api_key']) {
            this.progressBlock['request_api_key'] = "";
        }
        if (!this.progressBlock['workflowIds']) {
            this.progressBlock['workflowIds'] = [];
        }
        this.progressBlock.progress_elements.forEach((item, index) => {
            if (!this.progressBlock.progress_elements[index]['dependency_condition']) {
                this.progressBlock.progress_elements[index]['dependency_condition'] = {};
            }
            if (!this.progressBlock.progress_elements[index]['parent_element_id']) {
                this.progressBlock.progress_elements[index]['parent_element_id'] = "";
            }
            if (!this.progressBlock.progress_elements[index]['progress_elements']) {
                this.progressBlock.progress_elements[index]['progress_elements'] = [];
            }
        });
        this.applicationStates = {
            STATE_PENDING: localStorage.getItem('STATE_PENDING') || 'pending',
            STATE_COMPLETE: localStorage.getItem('STATE_COMPLETE') || 'complete',
            STATE_INCOMPLETE: localStorage.getItem('STATE_INCOMPLETE') || 'incomplete',
            STATE_ACTIVE: localStorage.getItem('STATE_ACTIVE') || 'active'
        };
        // get the step id if the navigateStepName is set to true
        if (localStorage.getItem('navigateStepName') === 'true') {
            this.currentStep = this.currentStep.split('-')[this.currentStep.split('-').length - 1];
        }
        if (this.progressBlock.progress_bar_type === 'nested-tree') {
            this.progressBarDesign = 'tree';
            this.isNestedTree = true;
            this.treeControl = new NestedTreeControl(node => node.children);
            this.dataSource = new MatTreeNestedDataSource();
        }
        else {
            this.progressBarDesign = this.progressBlock.progress_bar_type;
            this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
            this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        }
        this.intProgressBar();
        // console.log(this.stateIdMap);
        this.variableObj['emitApiSuccessRes_'] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            setTimeout(() => {
                this.intProgressBar();
            }, 0);
        });
        // TODO: Separate conditional for all emitters and then subscribe if required
        this.variableObj['emitOnDataSetOrUpdated_'] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            setTimeout(() => {
                const progressElements = this.progressBlock.progress_elements;
                this.updateMap(progressElements);
                this.intProgressBar();
            }, 0);
        });
    }
    intProgressBar() {
        const progressData = this.createMap();
        if (JSON.stringify(progressData) !== JSON.stringify(this.dataSource.data)) {
            // this.getCompletedStepListFromBackend();
            this.dataSource.data = this.createMap();
            this.expandNode(); // expand the node by default if the current step matches
        }
    }
    tree;
    ngAfterViewInit() {
        if (this.progressBlock.default_expand_all) {
            this.tree.treeControl.expandAll();
        }
    }
    getElementID(element) {
        return element.step_name === 'None' ? element._id : this.stepNameMapStepId[element.step_name];
    }
    updateMap(progressElements) {
        for (const element of progressElements) {
            if (!element['progress_elements']) {
                element['progress_elements'] = [];
            }
            if (!element['parent_element_id']) {
                element['parent_element_id'] = '';
            }
            if (!element['dependency_condition']) {
                element['dependency_condition'] = {};
            }
            if (element.dependency_condition && element.dependency_condition.query) {
                const dependencyCondition = this.conditionalUtil.checkStepDependency(element.dependency_condition);
                this.treeControlsData[element.progress_element_name] = (dependencyCondition) ? true : false;
            }
            if (element.progress_elements) {
                for (const progressElement of element.progress_elements) {
                    this.updateMap(progressElement.progress_elements);
                }
            }
        }
    }
    createMap() {
        const obj = {};
        for (const state of this.progressBlock.states) {
            if (!state['state_response_key']) {
                state['state_response_key'] = "";
            }
            obj[state.state_id] = state;
        }
        for (const key of this.stateIdMap) {
            this.stepIdMapStepName[key.tid] = key.name;
            this.stepNameMapStepId[key.name] = key.tid;
        }
        // console.log(this.progressBlock.progress_elements);
        let data = this.getTreeStates(this.progressBlock.progress_elements, obj)[1];
        data = this.progressBarDesign === 'tree' ? this.getStatesDependingOnChildAsTree(data) : this.setStateDependingOnChild(data);
        // console.log(data);
        return data;
    }
    getTreeStates(progressElements, state, type = 'parent', mainArr = []) {
        const treeObject = {
            name: '',
            states: {},
            navigation: {
                page_navigation_oncomplete: 'false',
                navigation_false_oncomplete: 'false',
                navigation_false_incomplete_step: 'false'
            },
            nodeType: type,
            stepName: '',
            stepId: '',
            currentState: this.applicationStates.STATE_PENDING,
            forceStates: false,
            seq: 0
        };
        if (progressElements) {
            for (const element of progressElements) {
                if (!element['progress_elements']) {
                    element['progress_elements'] = [];
                }
                if (!element['parent_element_id']) {
                    element['parent_element_id'] = '';
                }
                if (!element['dependency_condition']) {
                    element['dependency_condition'] = {};
                }
                treeObject.name = element.progress_element_name;
                treeObject.stepName = element.step_name;
                treeObject.seq = element.seq;
                const stepId = this.stepNameMapStepId[element.step_name];
                treeObject.stepId = stepId;
                treeObject.navigation.page_navigation_oncomplete = element.page_navigation_oncomplete;
                treeObject.navigation.navigation_false_oncomplete = element.navigation_false_oncomplete;
                treeObject.navigation.navigation_false_incomplete_step = element.navigation_false_incomplete_step;
                treeObject.forceStates = false;
                treeObject.currentState = this.getCurrentState(element, treeObject);
                this.navigationMap[stepId] = JSON.parse(JSON.stringify(treeObject.navigation));
                if (element.dependency_condition && element.dependency_condition.query) {
                    const dependencyCondition = this.conditionalUtil.checkStepDependency(element.dependency_condition);
                    this.treeControlsData[element.progress_element_name] = (dependencyCondition) ? true : false;
                }
                const stateObj = {};
                for (const stateData of element.state_id.split('|')) {
                    stateObj[state[stateData].state_type] = state[stateData];
                }
                treeObject.states = stateObj;
                treeObject.children = [];
                if (this.progressBarDesign === 'tree' && element.progress_elements) {
                    for (const progressElement of element.progress_elements) {
                        treeObject.children.push(this.getTreeStates([progressElement], state, 'child', mainArr)[0]);
                    }
                    treeObject.children = treeObject.children.sort((a, b) => (a.seq > b.seq) ? 1 : ((b.seq > a.seq) ? -1 : 0));
                }
                else {
                    mainArr.push(JSON.parse(JSON.stringify(treeObject)));
                    // tslint:disable-next-line: no-unused-expression
                    mainArr = (this.getTreeStates(element.progress_elements, state, 'child', mainArr)[1]);
                }
                const obj = JSON.parse(JSON.stringify(treeObject));
                if (this.progressBarDesign === 'tree' && type === 'parent') {
                    mainArr.push(obj);
                }
            }
        }
        return [treeObject, mainArr.sort((a, b) => (a.seq > b.seq) ? 1 : ((b.seq > a.seq) ? -1 : 0))];
    }
    hasChild = (_, node) => node.expandable;
    hasChildTree = (_, node) => !!node.children && node.children.length > 0;
    setStateDependingOnChild(progressMap) {
        const object = {};
        let name = '';
        for (const index of Object.keys(progressMap)) {
            // check if there is step name or not
            if (progressMap[index].nodeType === 'parent') {
                name = 'parent_' + index;
                object[name] = [];
            }
            if (progressMap[index].nodeType === 'child') {
                object[name].push(index);
            }
        }
        Object.keys(object).forEach(key => {
            const parentIndex = key.split('parent_')[1];
            let active = false;
            let complete = true;
            let incomplete = false;
            for (const index of object[key]) {
                // if any one is active set parent active
                if (progressMap[index].currentState === this.applicationStates.STATE_ACTIVE) {
                    complete = false;
                    active = true;
                }
                // if any one is incomplete set parent incomplete
                if (progressMap[index].currentState === this.applicationStates.STATE_INCOMPLETE) {
                    complete = false;
                    incomplete = true;
                }
                // if any one is incomplete set parent incomplete
                if (progressMap[index].currentState === this.applicationStates.STATE_PENDING) {
                    complete = false;
                }
            }
            if (progressMap[parentIndex].currentState === this.applicationStates.STATE_ACTIVE) {
                active = true;
            }
            if (!progressMap[parentIndex].forceStates) {
                progressMap[parentIndex].currentState = active ?
                    this.applicationStates.STATE_ACTIVE : complete ?
                    this.applicationStates.STATE_COMPLETE : incomplete ?
                    this.applicationStates.STATE_INCOMPLETE :
                    this.applicationStates.STATE_PENDING;
            }
            this.applicationStateStoreUtil
                .setAnyState(this.progressBlock.progress_bar_id, this.stepNameMapStepId[progressMap[parentIndex].stepName], complete ?
                'STATE_COMPLETE' : incomplete ?
                'STATE_INCOMPLETE' :
                'STATE_PENDING');
            // console.log(key.split('parent_')[1], { active, complete, incomplete });
        });
        return progressMap;
    }
    getCompletedStepListFromBackend() {
        this.completedStepList = [];
        let completedStepHandler = this.progressBlock.step_completed_list_handler?.split('##');
        if (this.progressBlock.step_completed_list_handler && completedStepHandler.length > 1) {
            // console.log("completedStepHandler: ", completedStepHandler)
            const handlerData = this.apiDataService.getApiDataByHandler(completedStepHandler[0]);
            // console.log("handlerData: ", handlerData)
            if (this.progressBlock.step_completed_list_handler && this.progressBlock.step_completed_list_handler.includes('[*]') && handlerData) {
                const regex = this.progressBlock.step_completed_list_handler?.split('[*]').join('\\[\\d+\\]');
                let flag = 0;
                for (const dataKey of Object.keys(handlerData.value)) {
                    const result = dataKey.match(new RegExp(regex));
                    if (result && handlerData.value[dataKey] && this.completedStepList.indexOf(Number(handlerData.value[dataKey])) == -1) {
                        this.completedStepList.push(Number(handlerData.value[dataKey]));
                    }
                }
                // console.log("completedStepList: ", this.completedStepList)
            }
        }
    }
    getStatesDependingOnChildAsTree(progressData) {
        this.getCompletedStepListFromBackend();
        for (const key of progressData) {
            let active = false;
            // let complete = key.currentState === this.applicationStates.STATE_COMPLETE;
            let complete = (this.progressBlock.step_completed_list_handler && this.completedStepList.indexOf(Number(key.stepId)) != -1 && !this.hasCompletedStateCondition(key)) ? true : false;
            let incomplete = false;
            if (key.currentState === this.applicationStates.STATE_ACTIVE) {
                active = true;
            }
            else {
                const status = this.getChildStatus(key.children);
                if (status.active.includes(true)) {
                    active = true;
                    complete = false;
                }
                if (status.complete.length && !status.complete.includes(false)) {
                    complete = true;
                }
                if (status.incomplete.includes(true)) {
                    incomplete = true;
                    complete = false;
                }
                // console.log({ active, complete, incomplete });
            }
            if (!key.forceStates) {
                key.currentState = active ?
                    this.applicationStates.STATE_ACTIVE : complete ?
                    this.applicationStates.STATE_COMPLETE : incomplete ?
                    this.applicationStates.STATE_INCOMPLETE :
                    this.applicationStates.STATE_PENDING;
            }
            this.applicationStateStoreUtil
                .setAnyState(this.progressBlock.progress_bar_id, this.getElementID(key), complete ?
                'STATE_COMPLETE' : incomplete ?
                'STATE_INCOMPLETE' :
                'STATE_PENDING');
        }
        return progressData;
    }
    getChildStatus(children, statusObj = { active: [], incomplete: [], complete: [] }) {
        let active = false;
        let complete = false;
        let incomplete = false;
        for (const child of children) {
            complete = (this.progressBlock.step_completed_list_handler && this.completedStepList.indexOf(Number(child.stepId)) != -1 && !this.hasCompletedStateCondition(child)) ? true : false;
            // console.log(child, statusObj);
            if (child.currentState === this.applicationStates.STATE_ACTIVE) {
                complete = false;
                active = true;
            }
            // if any one is incomplete set parent incomplete
            if (child.currentState === this.applicationStates.STATE_INCOMPLETE) {
                complete = false;
                incomplete = true;
            }
            // if any one is incomplete set parent incomplete
            if (child.currentState === this.applicationStates.STATE_PENDING) {
                complete = false;
            }
            complete = (this.progressBlock.step_completed_list_handler && this.completedStepList.indexOf(Number(child.stepId)) != -1 && !this.hasCompletedStateCondition(child)) ? true : complete;
            if (complete) {
                incomplete = false;
                active = false;
            }
            statusObj.active.push(active);
            statusObj.incomplete.push(incomplete);
            statusObj.complete.push(complete);
            if (child.children.length) {
                // getChildStatus(child.children, statusObj)
                statusObj = { ...statusObj, ...this.getChildStatus(child.children, statusObj) };
            }
        }
        // console.log("statusObj: ",statusObj)
        return statusObj;
    }
    getCurrentState(element, treeObject) {
        this.getCompletedStepListFromBackend();
        if (!this.getElementID(element)) {
            return this.applicationStates['STATE_PENDING'];
        }
        let returnState = this.applicationStates[this.applicationStateStoreUtil
            .getStepState(this.progressBlock.progress_bar_id, this.getElementID(element)) || 'STATE_PENDING'];
        if (element.state_condition) {
            for (const sCond of element.state_condition) {
                if (sCond.query && sCond.state_id) {
                    const stateCondition = this.conditionalUtil.checkStepDependency(sCond);
                    const state = this.progressBlock.states.find(s => s.state_id === sCond.state_id);
                    if (!state['state_response_key']) {
                        state['state_response_key'] = "";
                    }
                    if (stateCondition && state) {
                        switch (state.state_value) {
                            case 'active':
                                returnState = this.applicationStates.STATE_ACTIVE;
                                break;
                            case 'pending':
                                returnState = this.applicationStates.STATE_PENDING;
                                break;
                            case 'incomplete':
                                returnState = this.applicationStates.STATE_INCOMPLETE;
                                break;
                            case 'complete':
                                returnState = this.applicationStates.STATE_COMPLETE;
                                break;
                            default:
                                break;
                        }
                        treeObject.forceStates = true;
                    }
                }
            }
        }
        if (this.stepNameMapStepId[element.step_name] === this.currentStep && !this.hasActiveStateCondition(element)) {
            returnState = this.applicationStates.STATE_ACTIVE;
        }
        if (returnState != this.applicationStates.STATE_ACTIVE && !this.hasCompletedStateCondition(element) && this.progressBlock.step_completed_list_handler && this.completedStepList.indexOf(Number(treeObject.stepId)) != -1 && !this.hasCompletedStateCondition(element) && treeObject.nodeType == "child") {
            returnState = this.applicationStates.STATE_COMPLETE;
        }
        if (returnState == this.applicationStates.STATE_COMPLETE && !this.hasCompletedStateCondition(element) && this.progressBlock.step_completed_list_handler && this.completedStepList.indexOf(Number(treeObject.stepId)) == -1 && !this.hasCompletedStateCondition(element) && treeObject.nodeType == "child") {
            returnState = this.applicationStates.STATE_INCOMPLETE;
        }
        return returnState;
    }
    hasActiveStateCondition(element) {
        if (element.state_condition) {
            for (const sCond of element.state_condition) {
                if (sCond.query && sCond.state_id) {
                    const state = this.progressBlock.states.find(s => s.state_id === sCond.state_id);
                    if (!state['state_response_key']) {
                        state['state_response_key'] = "";
                    }
                    if (state && state.state_value === 'active') {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    hasCompletedStateCondition(element) {
        if (element.state_condition) {
            for (const sCond of element.state_condition) {
                if (sCond.query && sCond.state_id) {
                    const state = this.progressBlock.states.find(s => s.state_id === sCond.state_id);
                    if (!state['state_response_key']) {
                        state['state_response_key'] = "";
                    }
                    if (state && state.state_value === 'complete') {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    expandNode() {
        if (this.progressBarDesign !== 'tree' || this.progressBlock.default_expand_all) {
            if (this.progressBlock.default_expand_all && this.tree && this.tree.treeControl) {
                this.tree.treeControl.expandAll();
            }
            return;
        }
        let lastExpandedIndex = 0;
        if (this.isNestedTree) {
        }
        else {
            for (const treeNode of this.treeControl.dataNodes) {
                if (treeNode.expandable) {
                    lastExpandedIndex = this.treeControl.dataNodes.indexOf(treeNode);
                }
                if (treeNode.stepId === this.currentStep) {
                    this.treeControl.expand(this.treeControl.dataNodes[lastExpandedIndex]);
                    break;
                }
            }
        }
    }
    /**
     * navigation function
     * @param node
     */
    navigate(node) {
        if (!node.stepName) {
            return;
        }
        // console.log(node, this.navigationMap);
        // navigation_false_incomplete_step: This allows user to navigate to previously completed steps only, user can not go to any upcoming step from progress bar.
        let navigate = true;
        if (node.navigation.navigation_false_incomplete_step === 'true') {
            // console.log("getStepState: ",this.applicationStateStoreUtil.getStepState(this.progressBlock.progress_bar_id, node.stepId))
            if (this.progressBlock.step_completed_list_handler) {
                if (this.completedStepList.indexOf(Number(node.stepId)) == -1 && !this.hasCompletedStateCondition(node)) {
                    navigate = false;
                }
            }
            else {
                navigate = this.applicationStateStoreUtil
                    .getStepState(this.progressBlock.progress_bar_id, node.stepId) === 'STATE_COMPLETE';
            }
        }
        // console.log("navigate: ", navigate, "node.stepId: ", node.stepId);
        if (!navigate) {
            return;
        }
        // cannot click or navigate to any step if the current step is not completed
        navigate = true;
        if (this.navigationMap[this.currentStep] && this.navigationMap[this.currentStep].page_navigation_oncomplete === 'true') {
            navigate = this.applicationStateStoreUtil
                .getStepState(this.progressBlock.progress_bar_id, this.currentStep) === 'STATE_COMPLETE';
        }
        if (!navigate) {
            return;
        }
        // cannot navigate to the required step if the step has navigation_false_oncomplete true and if the step is completed
        if (node.navigation.navigation_false_oncomplete === 'true') {
            navigate = this.applicationStateStoreUtil
                .getStepState(this.progressBlock.progress_bar_id, node.stepId) !== 'STATE_COMPLETE';
        }
        if (navigate && node.stepId) {
            this.redirectionUtil.redirectTo(node.stepId);
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function ProgressBarRendererComponent_Factory(t) { return new (t || ProgressBarRendererComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.AppDataService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.SharedEventsServiceService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarRendererComponent, selectors: [["app-progress-bar-renderer"]], viewQuery: function ProgressBarRendererComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tree = _t.first);
        } }, inputs: { progressBlock: "progressBlock", stateIdMap: "stateIdMap", currentStep: "currentStep" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 7, consts: [["tree", ""], ["notNestedTree", ""], ["progressElement", ""], [3, "dataSource", "treeControl"], [4, "ngIf", "ngIfElse"], ["matTreeNodeToggle", "", 3, "class", 4, "matTreeNodeDef"], [3, "class", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodeToggle", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "mat-tree-node"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["role", "group"], ["matTreeNodeOutlet", ""], ["matTreeNodePadding", "", 3, "class", 4, "matTreeNodeDef"], ["matTreeNodePadding", "", 3, "class", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], ["matTreeNodePadding", ""], ["mat-icon-button", "", "disabled", ""], [4, "ngIf"], [3, "src", "alt", "class", "click", 4, "ngIf"], [3, "class", "color", "click", 4, "ngIf"], [3, "class", "innerHTML", "color", "click", 4, "ngIf"], [3, "click", "src", "alt"], [3, "click"], [3, "click", "innerHTML"]], template: function ProgressBarRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "mat-tree", 3, 0);
            i0.ɵɵtemplate(3, ProgressBarRendererComponent_ng_container_3_Template, 3, 1, "ng-container", 4)(4, ProgressBarRendererComponent_ng_template_4_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, ProgressBarRendererComponent_ng_template_6_Template, 2, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const notNestedTree_r13 = i0.ɵɵreference(5);
            i0.ɵɵclassMapInterpolate1("navigationPanel navigationPanel-", ctx.progressBlock.progress_bar_id, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.isNestedTree)("ngIfElse", notNestedTree_r13);
        } }, dependencies: [MatTreeModule, i5.MatNestedTreeNode, i5.MatTreeNodeDef, i5.MatTreeNodePadding, i5.MatTreeNodeToggle, i5.MatTree, i5.MatTreeNode, i5.MatTreeNodeOutlet, MatIconModule, i6.MatIcon, NgTemplateOutlet, CommonModule, i7.NgIf], styles: [".progress-bar-element-image[_ngcontent-%COMP%]{width:20px;margin-right:10px}[data-display=false][_ngcontent-%COMP%]{display:none!important}.cee-tree-invisible[_ngcontent-%COMP%]{display:none}.navigationPanel[_ngcontent-%COMP%]   .mat-nested-tree-node[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%]{padding-left:40px}.navigationPanel[_ngcontent-%COMP%]   div[role=group][_ngcontent-%COMP%] > .mat-tree-node[_ngcontent-%COMP%]{padding-left:40px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-progress-bar-renderer', standalone: true, imports: [MatTreeModule, MatIconModule, NgTemplateOutlet, CommonModule], template: "<div class=\"navigationPanel navigationPanel-{{progressBlock.progress_bar_id}}\">\r\n    <mat-tree #tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n        <!-- This is the tree node template for leaf nodes -->\r\n        <ng-container *ngIf=\"isNestedTree; else notNestedTree\">\r\n            <mat-tree-node *matTreeNodeDef=\"let node\" [attr.data-display]=\"treeControlsData[node.name]\" matTreeNodeToggle\r\n                class=\"progressNode progressNode--{{node.currentState}} progressNode--{{node.nodeType}} mat-tree-node\"\r\n                [attr.aria-selected]=\"node.currentState === applicationStates.STATE_ACTIVE ? 'true': 'false'\">\r\n                <ng-container [ngTemplateOutlet]=\"progressElement\"\r\n                    [ngTemplateOutletContext]=\"{node:node, currentState:node.currentState}\"></ng-container>\r\n            </mat-tree-node>\r\n            <!-- This is the nested tree node template for expandable nodes -->\r\n            <mat-nested-tree-node *matTreeNodeDef=\"let node;when: hasChildTree\"\r\n                [attr.data-display]=\"treeControlsData[node.name]\"\r\n                class=\"progressNode progressNode--{{node.currentState}} progressNode--{{node.nodeType}} mat-tree-node\"\r\n                [attr.aria-selected]=\"node.currentState === applicationStates.STATE_ACTIVE ? 'true': 'false'\">\r\n                <div class=\"mat-tree-node\">\r\n                    <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n                        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                        </mat-icon>\r\n                    </button>\r\n                    <ng-container [ngTemplateOutlet]=\"progressElement\"\r\n                        [ngTemplateOutletContext]=\"{node:node, currentState:node.currentState}\">\r\n                    </ng-container>\r\n                </div>\r\n                <!-- There is inline padding applied to this div using styles.\r\n                    This padding value depends on the mat-icon-button width.  -->\r\n                <div [class.cee-tree-invisible]=\"!treeControl.isExpanded(node)\" role=\"group\">\r\n                    <ng-container matTreeNodeOutlet></ng-container>\r\n                </div>\r\n            </mat-nested-tree-node>\r\n        </ng-container>\r\n        <ng-template #notNestedTree>\r\n            <mat-tree-node *matTreeNodeDef=\"let node\" [attr.data-display]=\"treeControlsData[node.name]\" matTreeNodePadding\r\n                class=\"progressNode progressNode--{{node.currentState}} progressNode--{{node.nodeType}} mat-tree-node\"\r\n                [attr.aria-selected]=\"node.currentState === applicationStates.STATE_ACTIVE ? 'true': 'false'\">\r\n                <!-- use a disabled button to provide padding for tree leaf -->\r\n                <button mat-icon-button disabled></button>\r\n                <ng-container [ngTemplateOutlet]=\"progressElement\"\r\n                    [ngTemplateOutletContext]=\"{node:node, currentState:node.currentState}\"></ng-container>\r\n            </mat-tree-node>\r\n            <!-- This is the tree node template for expandable nodes -->\r\n            <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" [attr.data-display]=\"treeControlsData[node.name]\"\r\n                matTreeNodePadding\r\n                class=\"progressNode progressNode--{{node.currentState}} progressNode--{{node.nodeType}} mat-tree-node\"\r\n                [attr.aria-selected]=\"node.currentState === applicationStates.STATE_ACTIVE ? 'true': 'false'\">\r\n                <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.name\">\r\n                    <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\r\n                    </mat-icon>\r\n                </button>\r\n                <ng-container [ngTemplateOutlet]=\"progressElement\"\r\n                    [ngTemplateOutletContext]=\"{node:node, currentState:node.currentState}\">\r\n                </ng-container>\r\n            </mat-tree-node>\r\n        </ng-template>\r\n    </mat-tree>\r\n    <ng-template #progressElement let-node=\"node\" let-currentState=\"currentState\">\r\n        <div\r\n            class=\"progress-bar-element progress-bar-element--{{currentState}} progress-bar-element--{{node.nodeType}}\">\r\n            <ng-container *ngIf=\"node.states[currentState]\">\r\n                <img [src]=\"node['states'][currentState]['state_icon']\" alt=\"{{node.name+' '+ currentState +' icon'}}\"\r\n                    class=\"progress-bar-element-image progress-bar-element-image--{{currentState}} progress-bar-element-image--{{node.nodeType}}\"\r\n                    *ngIf=\"node.states[currentState].state_icon && node.states[currentState].state_style !== 'color'\"\r\n                    (click)=\"navigate(node)\">\r\n                    <label\r\n                        class=\"progress-bar-element-name progress-bar-element-name--{{currentState}} progress-bar-element-name--{{node.nodeType}}\"\r\n                        *ngIf=\"!isHTML(node.name) && node.states[currentState].state_style !== 'icon'\" (click)=\"navigate(node)\"\r\n                        [style.color]=\"node.states[currentState].state_color\">\r\n                        {{node.name}}\r\n                    </label>\r\n                    <label\r\n                        class=\"progress-bar-element-name progress-bar-element-name--{{currentState}} progress-bar-element-name--{{node.nodeType}}\"\r\n                        *ngIf=\"isHTML(node.name) && node.states[currentState].state_style !== 'icon'\" [innerHTML]=\"node.name\" (click)=\"navigate(node)\"\r\n                        [style.color]=\"node.states[currentState].state_color\"></label>\r\n            </ng-container>\r\n        </div>\r\n    </ng-template>\r\n</div>", styles: [".progress-bar-element-image{width:20px;margin-right:10px}[data-display=false]{display:none!important}.cee-tree-invisible{display:none}.navigationPanel .mat-nested-tree-node div[role=group]{padding-left:40px}.navigationPanel div[role=group]>.mat-tree-node{padding-left:40px}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i4.SharedEventsServiceService }], { progressBlock: [{
            type: Input
        }], stateIdMap: [{
            type: Input
        }], currentStep: [{
            type: Input
        }], tree: [{
            type: ViewChild,
            args: ['tree', { static: false }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProgressBarRendererComponent, { className: "ProgressBarRendererComponent", filePath: "lib\\components\\progress-bar-renderer\\progress-bar-renderer.component.ts", lineNumber: 56 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL3Byb2dyZXNzLWJhci1yZW5kZXJlci9wcm9ncmVzcy1iYXItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyLXJlbmRlcmVyL3Byb2dyZXNzLWJhci1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBS3pILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7OztJQ1B2RCx3Q0FFa0c7SUFDOUYsMkJBQzJGO0lBQy9GLGlCQUFnQjs7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TSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkM7U0FDSjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNoQixNQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7c0ZBM2pCUSw0QkFBNEI7NkRBQTVCLDRCQUE0Qjs7Ozs7O1lDdERyQyxBQURKLDJCQUErRSxxQkFDTDtZQStCbEUsQUE3QkEsK0ZBQXVELGlIQTZCM0I7WUF3QmhDLGlCQUFXO1lBQ1gsOEhBQThFO1lBcUJsRixpQkFBTTs7O1lBOUVELG9HQUF5RTtZQUMxRCxjQUF5QjtZQUFDLEFBQTFCLDJDQUF5QixnQ0FBNEI7WUFFbEQsZUFBb0I7WUFBQSxBQUFwQix1Q0FBb0IsK0JBQWtCOzRCRGtEL0MsYUFBYSwwSUFBRSxhQUFhLGNBQUUsZ0JBQWdCLEVBQUUsWUFBWTs7aUZBRTdELDRCQUE0QjtjQVB4QyxTQUFTOzJCQUNJLDJCQUEyQixjQUd6QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLFlBQVksQ0FBQzswSUFHOUQsYUFBYTtrQkFBckIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBb0hnQyxJQUFJO2tCQUF6QyxTQUFTO21CQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O2tGQXZIM0IsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxhdFRyZWVDb250cm9sLCBOZXN0ZWRUcmVlQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRUcmVlRmxhdHRlbmVyLCBNYXRUcmVlRmxhdERhdGFTb3VyY2UsIE1hdFRyZWVOZXN0ZWREYXRhU291cmNlLCBNYXRUcmVlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcHBsaWNhdGlvbi1zdGF0ZS1zdG9yZS11dGlsJztcclxuaW1wb3J0IHsgUmVkaXJlY3Rpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVkaXJlY3Rpb24tdXRpbCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuXHJcblxyXG5pbnRlcmZhY2UgTmF2aWdhdGlvbiB7XHJcbiAgICBwYWdlX25hdmlnYXRpb25fb25jb21wbGV0ZTogc3RyaW5nO1xyXG4gICAgbmF2aWdhdGlvbl9mYWxzZV9vbmNvbXBsZXRlOiBzdHJpbmc7XHJcbiAgICBuYXZpZ2F0aW9uX2ZhbHNlX2luY29tcGxldGVfc3RlcDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBQcm9ncmVzcyBCYXIgd2l0aCBuZXN0ZWQgc3RydWN0dXJlLlxyXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYWwgbGlzdCBvZiBjaGlsZHJlbi5cclxuICovXHJcbmludGVyZmFjZSBQcm9ncmVzc0JhckVsZW1lbnQge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbmF2aWdhdGlvbjogTmF2aWdhdGlvbjtcclxuICAgIHN0ZXBOYW1lOiBzdHJpbmc7XHJcbiAgICBzdGF0ZXM6IG9iamVjdDtcclxuICAgIHN0ZXBJZDogc3RyaW5nO1xyXG4gICAgbm9kZVR5cGU6IHN0cmluZztcclxuICAgIGN1cnJlbnRTdGF0ZTogc3RyaW5nO1xyXG4gICAgZm9yY2VTdGF0ZXM6IGJvb2xlYW47XHJcbiAgICBzZXE6IG51bWJlcjtcclxuICAgIGNoaWxkcmVuPzogUHJvZ3Jlc3NCYXJFbGVtZW50W107XHJcbn1cclxuXHJcbi8qKiBGbGF0IG5vZGUgd2l0aCBleHBhbmRhYmxlIGFuZCBsZXZlbCBpbmZvcm1hdGlvbiAqL1xyXG5pbnRlcmZhY2UgRmxhdE5vZGUge1xyXG4gICAgZXhwYW5kYWJsZTogYm9vbGVhbjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICBuYXZpZ2F0aW9uOiBOYXZpZ2F0aW9uO1xyXG4gICAgc3RlcE5hbWU6IHN0cmluZztcclxuICAgIG5vZGVUeXBlOiBzdHJpbmc7XHJcbiAgICBzdGVwSWQ6IHN0cmluZztcclxuICAgIHN0YXRlczogb2JqZWN0O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXByb2dyZXNzLWJhci1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3MtYmFyLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3Byb2dyZXNzLWJhci1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUcmVlTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBOZ1RlbXBsYXRlT3V0bGV0LCBDb21tb25Nb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhclJlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHByb2dyZXNzQmxvY2s7XHJcbiAgICBASW5wdXQoKSBzdGF0ZUlkTWFwO1xyXG4gICAgQElucHV0KCkgY3VycmVudFN0ZXA7XHJcbiAgICBhcHBsaWNhdGlvblN0YXRlczogYW55ID0ge307IC8vIGFwcGxpY2F0aW9uIHN0YXRlc1xyXG4gICAgc3RlcElkTWFwU3RlcE5hbWU6IGFueSA9IHt9O1xyXG4gICAgc3RlcE5hbWVNYXBTdGVwSWQ6IGFueSA9IHt9O1xyXG4gICAgbmF2aWdhdGlvbk1hcDogYW55ID0ge307XHJcbiAgICBhcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsOiBBcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsO1xyXG4gICAgcmVkaXJlY3Rpb25VdGlsOiBSZWRpcmVjdGlvblV0aWw7XHJcblxyXG4gICAgcHJvZ3Jlc3NCYXJEZXNpZ24gPSAnJztcclxuICAgIGlzTmVzdGVkVHJlZSA9IGZhbHNlO1xyXG5cclxuICAgIHRyZWVDb250cm9sO1xyXG5cclxuICAgIHRyZWVDb250cm9sc0RhdGE6IGFueSA9IHt9O1xyXG4gICAgY29tcGxldGVkU3RlcExpc3Q6IGFueSA9IFtdO1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB2YXJpYWJsZS1uYW1lXHJcbiAgICBwcml2YXRlIF90cmFuc2Zvcm1lciA9IChub2RlOiBQcm9ncmVzc0JhckVsZW1lbnQsIGxldmVsOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBleHBhbmRhYmxlOiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwLFxyXG4gICAgICAgICAgICBuYW1lOiBub2RlLm5hbWUsXHJcbiAgICAgICAgICAgIG5hdmlnYXRpb246IG5vZGUubmF2aWdhdGlvbixcclxuICAgICAgICAgICAgc3RlcE5hbWU6IG5vZGUuc3RlcE5hbWUsXHJcbiAgICAgICAgICAgIHN0ZXBJZDogbm9kZS5zdGVwSWQsXHJcbiAgICAgICAgICAgIG5vZGVUeXBlOiBub2RlLm5vZGVUeXBlLFxyXG4gICAgICAgICAgICBjdXJyZW50U3RhdGU6IG5vZGUuY3VycmVudFN0YXRlLFxyXG4gICAgICAgICAgICBzdGF0ZXM6IG5vZGUuc3RhdGVzLFxyXG4gICAgICAgICAgICBsZXZlbFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcclxuICAgIHRyZWVGbGF0dGVuZXIgPSBuZXcgTWF0VHJlZUZsYXR0ZW5lcih0aGlzLl90cmFuc2Zvcm1lciwgbm9kZSA9PiBub2RlLmxldmVsLCBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSwgbm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcclxuXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG4gICAgZGF0YVNvdXJjZTtcclxuICAgIHZhcmlhYmxlT2JqID0ge307XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsID0gbmV3IEFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWwodGhpcy5hcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5yZWRpcmVjdGlvblV0aWwgPSBuZXcgUmVkaXJlY3Rpb25VdGlsKHJvdXRlcik7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb2dyZXNzQmxvY2tbJ3Jlc3BvbnNlX2FwaV9rZXknXSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2tbJ3Jlc3BvbnNlX2FwaV9rZXknXSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnByb2dyZXNzQmxvY2tbJ3JlcXVlc3RfYXBpX2tleSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCbG9ja1sncmVxdWVzdF9hcGlfa2V5J10gPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5wcm9ncmVzc0Jsb2NrWyd3b3JrZmxvd0lkcyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCbG9ja1snd29ya2Zsb3dJZHMnXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfZWxlbWVudHMuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZighdGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2VsZW1lbnRzW2luZGV4XVsnZGVwZW5kZW5jeV9jb25kaXRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2VsZW1lbnRzW2luZGV4XVsnZGVwZW5kZW5jeV9jb25kaXRpb24nXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfZWxlbWVudHNbaW5kZXhdWydwYXJlbnRfZWxlbWVudF9pZCddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfZWxlbWVudHNbaW5kZXhdWydwYXJlbnRfZWxlbWVudF9pZCddID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighdGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2VsZW1lbnRzW2luZGV4XVsncHJvZ3Jlc3NfZWxlbWVudHMnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2VsZW1lbnRzW2luZGV4XVsncHJvZ3Jlc3NfZWxlbWVudHMnXSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlcyA9IHtcclxuICAgICAgICAgICAgU1RBVEVfUEVORElORzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NUQVRFX1BFTkRJTkcnKSB8fCAncGVuZGluZycsXHJcbiAgICAgICAgICAgIFNUQVRFX0NPTVBMRVRFOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU1RBVEVfQ09NUExFVEUnKSB8fCAnY29tcGxldGUnLFxyXG4gICAgICAgICAgICBTVEFURV9JTkNPTVBMRVRFOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU1RBVEVfSU5DT01QTEVURScpIHx8ICdpbmNvbXBsZXRlJyxcclxuICAgICAgICAgICAgU1RBVEVfQUNUSVZFOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU1RBVEVfQUNUSVZFJykgfHwgJ2FjdGl2ZSdcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGdldCB0aGUgc3RlcCBpZCBpZiB0aGUgbmF2aWdhdGVTdGVwTmFtZSBpcyBzZXQgdG8gdHJ1ZVxyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGVTdGVwTmFtZScpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuY3VycmVudFN0ZXAuc3BsaXQoJy0nKVt0aGlzLmN1cnJlbnRTdGVwLnNwbGl0KCctJykubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX3R5cGUgPT09ICduZXN0ZWQtdHJlZScpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhckRlc2lnbiA9ICd0cmVlJztcclxuICAgICAgICAgICAgdGhpcy5pc05lc3RlZFRyZWUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPFByb2dyZXNzQmFyRWxlbWVudD4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPFByb2dyZXNzQmFyRWxlbWVudD4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyRGVzaWduID0gdGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2Jhcl90eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxGbGF0Tm9kZT4obm9kZSA9PiBub2RlLmxldmVsLCBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUcmVlRmxhdERhdGFTb3VyY2UodGhpcy50cmVlQ29udHJvbCwgdGhpcy50cmVlRmxhdHRlbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnRQcm9ncmVzc0JhcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGVJZE1hcCk7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnZW1pdEFwaVN1Y2Nlc3NSZXNfJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmludFByb2dyZXNzQmFyKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIFRPRE86IFNlcGFyYXRlIGNvbmRpdGlvbmFsIGZvciBhbGwgZW1pdHRlcnMgYW5kIHRoZW4gc3Vic2NyaWJlIGlmIHJlcXVpcmVkXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzRWxlbWVudHMgPSB0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfZWxlbWVudHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hcChwcm9ncmVzc0VsZW1lbnRzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50UHJvZ3Jlc3NCYXIoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbnRQcm9ncmVzc0JhcigpIHtcclxuICAgICAgICBjb25zdCBwcm9ncmVzc0RhdGEgPSB0aGlzLmNyZWF0ZU1hcCgpO1xyXG4gICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShwcm9ncmVzc0RhdGEpICE9PSBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGFTb3VyY2UuZGF0YSkpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5nZXRDb21wbGV0ZWRTdGVwTGlzdEZyb21CYWNrZW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy5jcmVhdGVNYXAoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kTm9kZSgpOyAvLyBleHBhbmQgdGhlIG5vZGUgYnkgZGVmYXVsdCBpZiB0aGUgY3VycmVudCBzdGVwIG1hdGNoZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RyZWUnLCB7IHN0YXRpYzogZmFsc2UgfSkgdHJlZTtcclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jsb2NrLmRlZmF1bHRfZXhwYW5kX2FsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RWxlbWVudElEKGVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gZWxlbWVudC5zdGVwX25hbWUgPT09ICdOb25lJyA/IGVsZW1lbnQuX2lkIDogdGhpcy5zdGVwTmFtZU1hcFN0ZXBJZFtlbGVtZW50LnN0ZXBfbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTWFwKHByb2dyZXNzRWxlbWVudHM6IGFueSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBwcm9ncmVzc0VsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIGlmKCFlbGVtZW50Wydwcm9ncmVzc19lbGVtZW50cyddKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50Wydwcm9ncmVzc19lbGVtZW50cyddID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWVsZW1lbnRbJ3BhcmVudF9lbGVtZW50X2lkJ10pIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnRbJ3BhcmVudF9lbGVtZW50X2lkJ10gPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighZWxlbWVudFsnZGVwZW5kZW5jeV9jb25kaXRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudFsnZGVwZW5kZW5jeV9jb25kaXRpb24nXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRlcGVuZGVuY3lfY29uZGl0aW9uICYmIGVsZW1lbnQuZGVwZW5kZW5jeV9jb25kaXRpb24ucXVlcnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1N0ZXBEZXBlbmRlbmN5KGVsZW1lbnQuZGVwZW5kZW5jeV9jb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlQ29udHJvbHNEYXRhW2VsZW1lbnQucHJvZ3Jlc3NfZWxlbWVudF9uYW1lXSA9IChkZXBlbmRlbmN5Q29uZGl0aW9uKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5wcm9ncmVzc19lbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9ncmVzc0VsZW1lbnQgb2YgZWxlbWVudC5wcm9ncmVzc19lbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTWFwKHByb2dyZXNzRWxlbWVudC5wcm9ncmVzc19lbGVtZW50cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWFwKCk6IEFycmF5PFByb2dyZXNzQmFyRWxlbWVudD4ge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHRoaXMucHJvZ3Jlc3NCbG9jay5zdGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYoIXN0YXRlWydzdGF0ZV9yZXNwb25zZV9rZXknXSkge1xyXG4gICAgICAgICAgICAgICAgc3RhdGVbJ3N0YXRlX3Jlc3BvbnNlX2tleSddID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvYmpbc3RhdGUuc3RhdGVfaWRdID0gc3RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiB0aGlzLnN0YXRlSWRNYXApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGVwSWRNYXBTdGVwTmFtZVtrZXkudGlkXSA9IGtleS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBOYW1lTWFwU3RlcElkW2tleS5uYW1lXSA9IGtleS50aWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvZ3Jlc3NCbG9jay5wcm9ncmVzc19lbGVtZW50cyk7XHJcbiAgICAgICAgbGV0IGRhdGE6IFByb2dyZXNzQmFyRWxlbWVudFtdID0gdGhpcy5nZXRUcmVlU3RhdGVzKHRoaXMucHJvZ3Jlc3NCbG9jay5wcm9ncmVzc19lbGVtZW50cywgb2JqKVsxXTtcclxuICAgICAgICBkYXRhID0gdGhpcy5wcm9ncmVzc0JhckRlc2lnbiA9PT0gJ3RyZWUnID8gdGhpcy5nZXRTdGF0ZXNEZXBlbmRpbmdPbkNoaWxkQXNUcmVlKGRhdGEpIDogdGhpcy5zZXRTdGF0ZURlcGVuZGluZ09uQ2hpbGQoZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJlZVN0YXRlcyhwcm9ncmVzc0VsZW1lbnRzLCBzdGF0ZSwgdHlwZSA9ICdwYXJlbnQnLCBtYWluQXJyOiBQcm9ncmVzc0JhckVsZW1lbnRbXSA9IFtdKTogYW55IHtcclxuICAgICAgICBjb25zdCB0cmVlT2JqZWN0OiBQcm9ncmVzc0JhckVsZW1lbnQgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICBzdGF0ZXM6IHt9LFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlX25hdmlnYXRpb25fb25jb21wbGV0ZTogJ2ZhbHNlJyxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25fZmFsc2Vfb25jb21wbGV0ZTogJ2ZhbHNlJyxcclxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25fZmFsc2VfaW5jb21wbGV0ZV9zdGVwOiAnZmFsc2UnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG5vZGVUeXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBzdGVwTmFtZTogJycsXHJcbiAgICAgICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZTogdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9QRU5ESU5HLFxyXG4gICAgICAgICAgICBmb3JjZVN0YXRlczogZmFsc2UsXHJcbiAgICAgICAgICAgIHNlcTogMFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHByb2dyZXNzRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHByb2dyZXNzRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50Wydwcm9ncmVzc19lbGVtZW50cyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFsncHJvZ3Jlc3NfZWxlbWVudHMnXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIWVsZW1lbnRbJ3BhcmVudF9lbGVtZW50X2lkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50WydwYXJlbnRfZWxlbWVudF9pZCddID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZighZWxlbWVudFsnZGVwZW5kZW5jeV9jb25kaXRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ2RlcGVuZGVuY3lfY29uZGl0aW9uJ10gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyZWVPYmplY3QubmFtZSA9IGVsZW1lbnQucHJvZ3Jlc3NfZWxlbWVudF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5zdGVwTmFtZSA9IGVsZW1lbnQuc3RlcF9uYW1lO1xyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5zZXEgPSBlbGVtZW50LnNlcTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBJZCA9IHRoaXMuc3RlcE5hbWVNYXBTdGVwSWRbZWxlbWVudC5zdGVwX25hbWVdO1xyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5zdGVwSWQgPSBzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICB0cmVlT2JqZWN0Lm5hdmlnYXRpb24ucGFnZV9uYXZpZ2F0aW9uX29uY29tcGxldGUgPSBlbGVtZW50LnBhZ2VfbmF2aWdhdGlvbl9vbmNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5uYXZpZ2F0aW9uLm5hdmlnYXRpb25fZmFsc2Vfb25jb21wbGV0ZSA9IGVsZW1lbnQubmF2aWdhdGlvbl9mYWxzZV9vbmNvbXBsZXRlO1xyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5uYXZpZ2F0aW9uLm5hdmlnYXRpb25fZmFsc2VfaW5jb21wbGV0ZV9zdGVwID0gZWxlbWVudC5uYXZpZ2F0aW9uX2ZhbHNlX2luY29tcGxldGVfc3RlcDtcclxuICAgICAgICAgICAgICAgIHRyZWVPYmplY3QuZm9yY2VTdGF0ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRyZWVPYmplY3QuY3VycmVudFN0YXRlID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoZWxlbWVudCwgdHJlZU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRpb25NYXBbc3RlcElkXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJlZU9iamVjdC5uYXZpZ2F0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGVwZW5kZW5jeV9jb25kaXRpb24gJiYgZWxlbWVudC5kZXBlbmRlbmN5X2NvbmRpdGlvbi5xdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1N0ZXBEZXBlbmRlbmN5KGVsZW1lbnQuZGVwZW5kZW5jeV9jb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2xzRGF0YVtlbGVtZW50LnByb2dyZXNzX2VsZW1lbnRfbmFtZV0gPSAoZGVwZW5kZW5jeUNvbmRpdGlvbikgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3RhdGVEYXRhIG9mIGVsZW1lbnQuc3RhdGVfaWQuc3BsaXQoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlT2JqW3N0YXRlW3N0YXRlRGF0YV0uc3RhdGVfdHlwZV0gPSBzdGF0ZVtzdGF0ZURhdGFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJlZU9iamVjdC5zdGF0ZXMgPSBzdGF0ZU9iajtcclxuICAgICAgICAgICAgICAgIHRyZWVPYmplY3QuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRGVzaWduID09PSAndHJlZScgJiYgZWxlbWVudC5wcm9ncmVzc19lbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZ3Jlc3NFbGVtZW50IG9mIGVsZW1lbnQucHJvZ3Jlc3NfZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU9iamVjdC5jaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRUcmVlU3RhdGVzKFtwcm9ncmVzc0VsZW1lbnRdLCBzdGF0ZSwgJ2NoaWxkJywgbWFpbkFycilbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJlZU9iamVjdC5jaGlsZHJlbiA9IHRyZWVPYmplY3QuY2hpbGRyZW4uc29ydCgoYSwgYikgPT4gKGEuc2VxID4gYi5zZXEpID8gMSA6ICgoYi5zZXEgPiBhLnNlcSkgPyAtMSA6IDApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkFyci5wdXNoKEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJlZU9iamVjdCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkFyciA9ICh0aGlzLmdldFRyZWVTdGF0ZXMoZWxlbWVudC5wcm9ncmVzc19lbGVtZW50cywgc3RhdGUsICdjaGlsZCcsIG1haW5BcnIpWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodHJlZU9iamVjdCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXJEZXNpZ24gPT09ICd0cmVlJyAmJiB0eXBlID09PSAncGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1haW5BcnIucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbdHJlZU9iamVjdCwgbWFpbkFyci5zb3J0KChhLCBiKSA9PiAoYS5zZXEgPiBiLnNlcSkgPyAxIDogKChiLnNlcSA+IGEuc2VxKSA/IC0xIDogMCkpXTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XHJcbiAgICBoYXNDaGlsZFRyZWUgPSAoXzogbnVtYmVyLCBub2RlOiBQcm9ncmVzc0JhckVsZW1lbnQpID0+ICEhbm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDA7XHJcblxyXG4gICAgc2V0U3RhdGVEZXBlbmRpbmdPbkNoaWxkKHByb2dyZXNzTWFwOiBQcm9ncmVzc0JhckVsZW1lbnRbXSkge1xyXG4gICAgICAgIGNvbnN0IG9iamVjdCA9IHt9O1xyXG4gICAgICAgIGxldCBuYW1lID0gJyc7XHJcbiAgICAgICAgZm9yIChjb25zdCBpbmRleCBvZiBPYmplY3Qua2V5cyhwcm9ncmVzc01hcCkpIHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgc3RlcCBuYW1lIG9yIG5vdFxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NNYXBbaW5kZXhdLm5vZGVUeXBlID09PSAncGFyZW50Jykge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9ICdwYXJlbnRfJyArIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W25hbWVdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzTWFwW2luZGV4XS5ub2RlVHlwZSA9PT0gJ2NoaWxkJykge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W25hbWVdLnB1c2goaW5kZXgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRJbmRleCA9IGtleS5zcGxpdCgncGFyZW50XycpWzFdO1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBjb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBpbmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5kZXggb2Ygb2JqZWN0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIGFueSBvbmUgaXMgYWN0aXZlIHNldCBwYXJlbnQgYWN0aXZlXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3NNYXBbaW5kZXhdLmN1cnJlbnRTdGF0ZSA9PT0gdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9BQ1RJVkUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiBhbnkgb25lIGlzIGluY29tcGxldGUgc2V0IHBhcmVudCBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3NNYXBbaW5kZXhdLmN1cnJlbnRTdGF0ZSA9PT0gdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9JTkNPTVBMRVRFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpbmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmIGFueSBvbmUgaXMgaW5jb21wbGV0ZSBzZXQgcGFyZW50IGluY29tcGxldGVcclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzc01hcFtpbmRleF0uY3VycmVudFN0YXRlID09PSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX1BFTkRJTkcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc01hcFtwYXJlbnRJbmRleF0uY3VycmVudFN0YXRlID09PSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0FDVElWRSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXByb2dyZXNzTWFwW3BhcmVudEluZGV4XS5mb3JjZVN0YXRlcykge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NNYXBbcGFyZW50SW5kZXhdLmN1cnJlbnRTdGF0ZSA9IGFjdGl2ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9BQ1RJVkUgOiBjb21wbGV0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQ09NUExFVEUgOiBpbmNvbXBsZXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfSU5DT01QTEVURSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX1BFTkRJTkc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbFxyXG4gICAgICAgICAgICAgICAgLnNldEFueVN0YXRlKHRoaXMucHJvZ3Jlc3NCbG9jay5wcm9ncmVzc19iYXJfaWQsIHRoaXMuc3RlcE5hbWVNYXBTdGVwSWRbcHJvZ3Jlc3NNYXBbcGFyZW50SW5kZXhdLnN0ZXBOYW1lXSwgY29tcGxldGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICdTVEFURV9DT01QTEVURScgOiBpbmNvbXBsZXRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NUQVRFX0lOQ09NUExFVEUnIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1NUQVRFX1BFTkRJTkcnKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5LnNwbGl0KCdwYXJlbnRfJylbMV0sIHsgYWN0aXZlLCBjb21wbGV0ZSwgaW5jb21wbGV0ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3NNYXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcGxldGVkU3RlcExpc3RGcm9tQmFja2VuZCgpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZFN0ZXBMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlZFN0ZXBIYW5kbGVyID0gdGhpcy5wcm9ncmVzc0Jsb2NrLnN0ZXBfY29tcGxldGVkX2xpc3RfaGFuZGxlcj8uc3BsaXQoJyMjJyk7XHJcbiAgICAgICAgaWYodGhpcy5wcm9ncmVzc0Jsb2NrLnN0ZXBfY29tcGxldGVkX2xpc3RfaGFuZGxlciAmJiBjb21wbGV0ZWRTdGVwSGFuZGxlci5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcGxldGVkU3RlcEhhbmRsZXI6IFwiLCBjb21wbGV0ZWRTdGVwSGFuZGxlcilcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoY29tcGxldGVkU3RlcEhhbmRsZXJbMF0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhhbmRsZXJEYXRhOiBcIiwgaGFuZGxlckRhdGEpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmxvY2suc3RlcF9jb21wbGV0ZWRfbGlzdF9oYW5kbGVyICYmIHRoaXMucHJvZ3Jlc3NCbG9jay5zdGVwX2NvbXBsZXRlZF9saXN0X2hhbmRsZXIuaW5jbHVkZXMoJ1sqXScpICYmIGhhbmRsZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHRoaXMucHJvZ3Jlc3NCbG9jay5zdGVwX2NvbXBsZXRlZF9saXN0X2hhbmRsZXI/LnNwbGl0KCdbKl0nKS5qb2luKCdcXFxcW1xcXFxkK1xcXFxdJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmxhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXMoaGFuZGxlckRhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YUtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAmJiBoYW5kbGVyRGF0YS52YWx1ZVtkYXRhS2V5XSAmJiB0aGlzLmNvbXBsZXRlZFN0ZXBMaXN0LmluZGV4T2YoTnVtYmVyKGhhbmRsZXJEYXRhLnZhbHVlW2RhdGFLZXldKSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWRTdGVwTGlzdC5wdXNoKE51bWJlcihoYW5kbGVyRGF0YS52YWx1ZVtkYXRhS2V5XSkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb21wbGV0ZWRTdGVwTGlzdDogXCIsIHRoaXMuY29tcGxldGVkU3RlcExpc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGVzRGVwZW5kaW5nT25DaGlsZEFzVHJlZShwcm9ncmVzc0RhdGE6IFByb2dyZXNzQmFyRWxlbWVudFtdKSB7XHJcbiAgICAgICAgdGhpcy5nZXRDb21wbGV0ZWRTdGVwTGlzdEZyb21CYWNrZW5kKCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcHJvZ3Jlc3NEYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gbGV0IGNvbXBsZXRlID0ga2V5LmN1cnJlbnRTdGF0ZSA9PT0gdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9DT01QTEVURTtcclxuICAgICAgICAgICAgbGV0IGNvbXBsZXRlID0gKHRoaXMucHJvZ3Jlc3NCbG9jay5zdGVwX2NvbXBsZXRlZF9saXN0X2hhbmRsZXIgJiYgdGhpcy5jb21wbGV0ZWRTdGVwTGlzdC5pbmRleE9mKE51bWJlcihrZXkuc3RlcElkKSkgIT0gLTEgJiYgIXRoaXMuaGFzQ29tcGxldGVkU3RhdGVDb25kaXRpb24oa2V5KSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBpbmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChrZXkuY3VycmVudFN0YXRlID09PSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0FDVElWRSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1czogYW55ID0gdGhpcy5nZXRDaGlsZFN0YXR1cyhrZXkuY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5hY3RpdmUuaW5jbHVkZXModHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzLmNvbXBsZXRlLmxlbmd0aCAmJiAhc3RhdHVzLmNvbXBsZXRlLmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuaW5jb21wbGV0ZS5pbmNsdWRlcyh0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh7IGFjdGl2ZSwgY29tcGxldGUsIGluY29tcGxldGUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFrZXkuZm9yY2VTdGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGtleS5jdXJyZW50U3RhdGUgPSBhY3RpdmUgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFIDogY29tcGxldGUgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0NPTVBMRVRFIDogaW5jb21wbGV0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0lOQ09NUExFVEUgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9QRU5ESU5HO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbFxyXG4gICAgICAgICAgICAgICAgLnNldEFueVN0YXRlKHRoaXMucHJvZ3Jlc3NCbG9jay5wcm9ncmVzc19iYXJfaWQsIHRoaXMuZ2V0RWxlbWVudElEKGtleSksIGNvbXBsZXRlID9cclxuICAgICAgICAgICAgICAgICAgICAnU1RBVEVfQ09NUExFVEUnIDogaW5jb21wbGV0ZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTVEFURV9JTkNPTVBMRVRFJyA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdTVEFURV9QRU5ESU5HJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9ncmVzc0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRTdGF0dXMoY2hpbGRyZW4sIHN0YXR1c09iaiA9IHsgYWN0aXZlOiBbXSwgaW5jb21wbGV0ZTogW10sIGNvbXBsZXRlOiBbXSB9KSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBpbmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb21wbGV0ZSA9ICh0aGlzLnByb2dyZXNzQmxvY2suc3RlcF9jb21wbGV0ZWRfbGlzdF9oYW5kbGVyICYmIHRoaXMuY29tcGxldGVkU3RlcExpc3QuaW5kZXhPZihOdW1iZXIoY2hpbGQuc3RlcElkKSkgIT0gLTEgJiYgIXRoaXMuaGFzQ29tcGxldGVkU3RhdGVDb25kaXRpb24oY2hpbGQpKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hpbGQsIHN0YXR1c09iaik7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5jdXJyZW50U3RhdGUgPT09IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiBhbnkgb25lIGlzIGluY29tcGxldGUgc2V0IHBhcmVudCBpbmNvbXBsZXRlXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5jdXJyZW50U3RhdGUgPT09IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfSU5DT01QTEVURSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGluY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIGFueSBvbmUgaXMgaW5jb21wbGV0ZSBzZXQgcGFyZW50IGluY29tcGxldGVcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmN1cnJlbnRTdGF0ZSA9PT0gdGhpcy5hcHBsaWNhdGlvblN0YXRlcy5TVEFURV9QRU5ESU5HKSB7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gKHRoaXMucHJvZ3Jlc3NCbG9jay5zdGVwX2NvbXBsZXRlZF9saXN0X2hhbmRsZXIgJiYgdGhpcy5jb21wbGV0ZWRTdGVwTGlzdC5pbmRleE9mKE51bWJlcihjaGlsZC5zdGVwSWQpKSAhPSAtMSAmJiAhdGhpcy5oYXNDb21wbGV0ZWRTdGF0ZUNvbmRpdGlvbihjaGlsZCkpID8gdHJ1ZSA6IGNvbXBsZXRlO1xyXG4gICAgICAgICAgICBpZihjb21wbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhdHVzT2JqLmFjdGl2ZS5wdXNoKGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIHN0YXR1c09iai5pbmNvbXBsZXRlLnB1c2goaW5jb21wbGV0ZSk7XHJcbiAgICAgICAgICAgIHN0YXR1c09iai5jb21wbGV0ZS5wdXNoKGNvbXBsZXRlKTtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZ2V0Q2hpbGRTdGF0dXMoY2hpbGQuY2hpbGRyZW4sIHN0YXR1c09iailcclxuICAgICAgICAgICAgICAgIHN0YXR1c09iaiA9IHsgLi4uc3RhdHVzT2JqLCAuLi50aGlzLmdldENoaWxkU3RhdHVzKGNoaWxkLmNoaWxkcmVuLCBzdGF0dXNPYmopIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGF0dXNPYmo6IFwiLHN0YXR1c09iailcclxuICAgICAgICByZXR1cm4gc3RhdHVzT2JqO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRTdGF0ZShlbGVtZW50LCB0cmVlT2JqZWN0OiBQcm9ncmVzc0JhckVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmdldENvbXBsZXRlZFN0ZXBMaXN0RnJvbUJhY2tlbmQoKTtcclxuICAgICAgICBpZiAoIXRoaXMuZ2V0RWxlbWVudElEKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzWydTVEFURV9QRU5ESU5HJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXNbdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsXHJcbiAgICAgICAgICAgIC5nZXRTdGVwU3RhdGUodGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2Jhcl9pZCwgdGhpcy5nZXRFbGVtZW50SUQoZWxlbWVudCkpIHx8ICdTVEFURV9QRU5ESU5HJ107XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc0NvbmQgb2YgZWxlbWVudC5zdGF0ZV9jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzQ29uZC5xdWVyeSAmJiBzQ29uZC5zdGF0ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tTdGVwRGVwZW5kZW5jeShzQ29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnByb2dyZXNzQmxvY2suc3RhdGVzLmZpbmQocyA9PiBzLnN0YXRlX2lkID09PSBzQ29uZC5zdGF0ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXN0YXRlWydzdGF0ZV9yZXNwb25zZV9rZXknXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVsnc3RhdGVfcmVzcG9uc2Vfa2V5J10gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVDb25kaXRpb24gJiYgc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzdGF0ZS5zdGF0ZV92YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWN0aXZlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncGVuZGluZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuU3RhdGUgPSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX1BFTkRJTkc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdpbmNvbXBsZXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfSU5DT01QTEVURTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbXBsZXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQ09NUExFVEU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZU9iamVjdC5mb3JjZVN0YXRlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnN0ZXBOYW1lTWFwU3RlcElkW2VsZW1lbnQuc3RlcF9uYW1lXSA9PT0gdGhpcy5jdXJyZW50U3RlcCAmJiAhdGhpcy5oYXNBY3RpdmVTdGF0ZUNvbmRpdGlvbihlbGVtZW50KSkge1xyXG4gICAgICAgICAgICByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihyZXR1cm5TdGF0ZSAhPSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0FDVElWRSAmJiAhdGhpcy5oYXNDb21wbGV0ZWRTdGF0ZUNvbmRpdGlvbihlbGVtZW50KSAmJiB0aGlzLnByb2dyZXNzQmxvY2suc3RlcF9jb21wbGV0ZWRfbGlzdF9oYW5kbGVyICYmIHRoaXMuY29tcGxldGVkU3RlcExpc3QuaW5kZXhPZihOdW1iZXIodHJlZU9iamVjdC5zdGVwSWQpKSAhPSAtMSAmJiAhdGhpcy5oYXNDb21wbGV0ZWRTdGF0ZUNvbmRpdGlvbihlbGVtZW50KSAmJiB0cmVlT2JqZWN0Lm5vZGVUeXBlID09IFwiY2hpbGRcIikge1xyXG4gICAgICAgICAgICByZXR1cm5TdGF0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHJldHVyblN0YXRlID09IHRoaXMuYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQ09NUExFVEUgJiYgIXRoaXMuaGFzQ29tcGxldGVkU3RhdGVDb25kaXRpb24oZWxlbWVudCkgJiYgdGhpcy5wcm9ncmVzc0Jsb2NrLnN0ZXBfY29tcGxldGVkX2xpc3RfaGFuZGxlciAmJiB0aGlzLmNvbXBsZXRlZFN0ZXBMaXN0LmluZGV4T2YoTnVtYmVyKHRyZWVPYmplY3Quc3RlcElkKSkgPT0gLTEgJiYgIXRoaXMuaGFzQ29tcGxldGVkU3RhdGVDb25kaXRpb24oZWxlbWVudCkgJiYgdHJlZU9iamVjdC5ub2RlVHlwZSA9PSBcImNoaWxkXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuU3RhdGUgPSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0lOQ09NUExFVEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5TdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBY3RpdmVTdGF0ZUNvbmRpdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuc3RhdGVfY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc0NvbmQgb2YgZWxlbWVudC5zdGF0ZV9jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzQ29uZC5xdWVyeSAmJiBzQ29uZC5zdGF0ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wcm9ncmVzc0Jsb2NrLnN0YXRlcy5maW5kKHMgPT4gcy5zdGF0ZV9pZCA9PT0gc0NvbmQuc3RhdGVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFzdGF0ZVsnc3RhdGVfcmVzcG9uc2Vfa2V5J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVbJ3N0YXRlX3Jlc3BvbnNlX2tleSddID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnN0YXRlX3ZhbHVlID09PSAnYWN0aXZlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NvbXBsZXRlZFN0YXRlQ29uZGl0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5zdGF0ZV9jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzQ29uZCBvZiBlbGVtZW50LnN0YXRlX2NvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNDb25kLnF1ZXJ5ICYmIHNDb25kLnN0YXRlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLnByb2dyZXNzQmxvY2suc3RhdGVzLmZpbmQocyA9PiBzLnN0YXRlX2lkID09PSBzQ29uZC5zdGF0ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXN0YXRlWydzdGF0ZV9yZXNwb25zZV9rZXknXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZVsnc3RhdGVfcmVzcG9uc2Vfa2V5J10gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuc3RhdGVfdmFsdWUgPT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBhbmROb2RlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyRGVzaWduICE9PSAndHJlZScgfHwgdGhpcy5wcm9ncmVzc0Jsb2NrLmRlZmF1bHRfZXhwYW5kX2FsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jsb2NrLmRlZmF1bHRfZXhwYW5kX2FsbCAmJiB0aGlzLnRyZWUgJiYgdGhpcy50cmVlLnRyZWVDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyZWUudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbGFzdEV4cGFuZGVkSW5kZXggPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTmVzdGVkVHJlZSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdHJlZU5vZGUgb2YgdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0cmVlTm9kZS5leHBhbmRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdEV4cGFuZGVkSW5kZXggPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlcy5pbmRleE9mKHRyZWVOb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0cmVlTm9kZS5zdGVwSWQgPT09IHRoaXMuY3VycmVudFN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZCh0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlc1tsYXN0RXhwYW5kZWRJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbmF2aWdhdGlvbiBmdW5jdGlvblxyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgbmF2aWdhdGUobm9kZTogRmxhdE5vZGUpIHtcclxuICAgICAgICBpZiAoIW5vZGUuc3RlcE5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhub2RlLCB0aGlzLm5hdmlnYXRpb25NYXApO1xyXG4gICAgICAgIC8vIG5hdmlnYXRpb25fZmFsc2VfaW5jb21wbGV0ZV9zdGVwOiBUaGlzIGFsbG93cyB1c2VyIHRvIG5hdmlnYXRlIHRvIHByZXZpb3VzbHkgY29tcGxldGVkIHN0ZXBzIG9ubHksIHVzZXIgY2FuIG5vdCBnbyB0byBhbnkgdXBjb21pbmcgc3RlcCBmcm9tIHByb2dyZXNzIGJhci5cclxuICAgICAgICBsZXQgbmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChub2RlLm5hdmlnYXRpb24ubmF2aWdhdGlvbl9mYWxzZV9pbmNvbXBsZXRlX3N0ZXAgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldFN0ZXBTdGF0ZTogXCIsdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsLmdldFN0ZXBTdGF0ZSh0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX2lkLCBub2RlLnN0ZXBJZCkpXHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NCbG9jay5zdGVwX2NvbXBsZXRlZF9saXN0X2hhbmRsZXIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvbXBsZXRlZFN0ZXBMaXN0LmluZGV4T2YoTnVtYmVyKG5vZGUuc3RlcElkKSkgPT0gLTEgJiYgIXRoaXMuaGFzQ29tcGxldGVkU3RhdGVDb25kaXRpb24obm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmF2aWdhdGUgPSB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWxcclxuICAgICAgICAgICAgICAgIC5nZXRTdGVwU3RhdGUodGhpcy5wcm9ncmVzc0Jsb2NrLnByb2dyZXNzX2Jhcl9pZCwgbm9kZS5zdGVwSWQpID09PSAnU1RBVEVfQ09NUExFVEUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmF2aWdhdGU6IFwiLCBuYXZpZ2F0ZSwgXCJub2RlLnN0ZXBJZDogXCIsIG5vZGUuc3RlcElkKTtcclxuICAgICAgICBpZiAoIW5hdmlnYXRlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbm5vdCBjbGljayBvciBuYXZpZ2F0ZSB0byBhbnkgc3RlcCBpZiB0aGUgY3VycmVudCBzdGVwIGlzIG5vdCBjb21wbGV0ZWRcclxuICAgICAgICBuYXZpZ2F0ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvbk1hcFt0aGlzLmN1cnJlbnRTdGVwXSAmJiB0aGlzLm5hdmlnYXRpb25NYXBbdGhpcy5jdXJyZW50U3RlcF0ucGFnZV9uYXZpZ2F0aW9uX29uY29tcGxldGUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbFxyXG4gICAgICAgICAgICAgICAgLmdldFN0ZXBTdGF0ZSh0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX2lkLCB0aGlzLmN1cnJlbnRTdGVwKSA9PT0gJ1NUQVRFX0NPTVBMRVRFJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2Fubm90IG5hdmlnYXRlIHRvIHRoZSByZXF1aXJlZCBzdGVwIGlmIHRoZSBzdGVwIGhhcyBuYXZpZ2F0aW9uX2ZhbHNlX29uY29tcGxldGUgdHJ1ZSBhbmQgaWYgdGhlIHN0ZXAgaXMgY29tcGxldGVkXHJcbiAgICAgICAgaWYgKG5vZGUubmF2aWdhdGlvbi5uYXZpZ2F0aW9uX2ZhbHNlX29uY29tcGxldGUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBuYXZpZ2F0ZSA9IHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbFxyXG4gICAgICAgICAgICAgICAgLmdldFN0ZXBTdGF0ZSh0aGlzLnByb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX2lkLCBub2RlLnN0ZXBJZCkgIT09ICdTVEFURV9DT01QTEVURSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuYXZpZ2F0ZSAmJiBub2RlLnN0ZXBJZCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0aW9uVXRpbC5yZWRpcmVjdFRvKG5vZGUuc3RlcElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0hUTUwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gLyg8KFtePl0rKT4pL2lnO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwibmF2aWdhdGlvblBhbmVsIG5hdmlnYXRpb25QYW5lbC17e3Byb2dyZXNzQmxvY2sucHJvZ3Jlc3NfYmFyX2lkfX1cIj5cclxuICAgIDxtYXQtdHJlZSAjdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XHJcbiAgICAgICAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTmVzdGVkVHJlZTsgZWxzZSBub3ROZXN0ZWRUcmVlXCI+XHJcbiAgICAgICAgICAgIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgW2F0dHIuZGF0YS1kaXNwbGF5XT1cInRyZWVDb250cm9sc0RhdGFbbm9kZS5uYW1lXVwiIG1hdFRyZWVOb2RlVG9nZ2xlXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzTm9kZSBwcm9ncmVzc05vZGUtLXt7bm9kZS5jdXJyZW50U3RhdGV9fSBwcm9ncmVzc05vZGUtLXt7bm9kZS5ub2RlVHlwZX19IG1hdC10cmVlLW5vZGVcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJub2RlLmN1cnJlbnRTdGF0ZSA9PT0gYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFID8gJ3RydWUnOiAnZmFsc2UnXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntub2RlOm5vZGUsIGN1cnJlbnRTdGF0ZTpub2RlLmN1cnJlbnRTdGF0ZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9tYXQtdHJlZS1ub2RlPlxyXG4gICAgICAgICAgICA8IS0tIFRoaXMgaXMgdGhlIG5lc3RlZCB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XHJcbiAgICAgICAgICAgIDxtYXQtbmVzdGVkLXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTt3aGVuOiBoYXNDaGlsZFRyZWVcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuZGF0YS1kaXNwbGF5XT1cInRyZWVDb250cm9sc0RhdGFbbm9kZS5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzTm9kZSBwcm9ncmVzc05vZGUtLXt7bm9kZS5jdXJyZW50U3RhdGV9fSBwcm9ncmVzc05vZGUtLXt7bm9kZS5ub2RlVHlwZX19IG1hdC10cmVlLW5vZGVcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJub2RlLmN1cnJlbnRTdGF0ZSA9PT0gYXBwbGljYXRpb25TdGF0ZXMuU1RBVEVfQUNUSVZFID8gJ3RydWUnOiAnZmFsc2UnXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWF0LXRyZWUtbm9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3RvZ2dsZSAnICsgbm9kZS5uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntub2RlOm5vZGUsIGN1cnJlbnRTdGF0ZTpub2RlLmN1cnJlbnRTdGF0ZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSBUaGVyZSBpcyBpbmxpbmUgcGFkZGluZyBhcHBsaWVkIHRvIHRoaXMgZGl2IHVzaW5nIHN0eWxlcy5cclxuICAgICAgICAgICAgICAgICAgICBUaGlzIHBhZGRpbmcgdmFsdWUgZGVwZW5kcyBvbiB0aGUgbWF0LWljb24tYnV0dG9uIHdpZHRoLiAgLS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtjbGFzcy5jZWUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSlcIiByb2xlPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdFRyZWVOb2RlT3V0bGV0PjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWF0LW5lc3RlZC10cmVlLW5vZGU+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNub3ROZXN0ZWRUcmVlPlxyXG4gICAgICAgICAgICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIFthdHRyLmRhdGEtZGlzcGxheV09XCJ0cmVlQ29udHJvbHNEYXRhW25vZGUubmFtZV1cIiBtYXRUcmVlTm9kZVBhZGRpbmdcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NOb2RlIHByb2dyZXNzTm9kZS0te3tub2RlLmN1cnJlbnRTdGF0ZX19IHByb2dyZXNzTm9kZS0te3tub2RlLm5vZGVUeXBlfX0gbWF0LXRyZWUtbm9kZVwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIm5vZGUuY3VycmVudFN0YXRlID09PSBhcHBsaWNhdGlvblN0YXRlcy5TVEFURV9BQ1RJVkUgPyAndHJ1ZSc6ICdmYWxzZSdcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntub2RlOm5vZGUsIGN1cnJlbnRTdGF0ZTpub2RlLmN1cnJlbnRTdGF0ZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9tYXQtdHJlZS1ub2RlPlxyXG4gICAgICAgICAgICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgZXhwYW5kYWJsZSBub2RlcyAtLT5cclxuICAgICAgICAgICAgPG1hdC10cmVlLW5vZGUgKm1hdFRyZWVOb2RlRGVmPVwibGV0IG5vZGU7d2hlbjogaGFzQ2hpbGRcIiBbYXR0ci5kYXRhLWRpc3BsYXldPVwidHJlZUNvbnRyb2xzRGF0YVtub2RlLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgIG1hdFRyZWVOb2RlUGFkZGluZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzc05vZGUgcHJvZ3Jlc3NOb2RlLS17e25vZGUuY3VycmVudFN0YXRlfX0gcHJvZ3Jlc3NOb2RlLS17e25vZGUubm9kZVR5cGV9fSBtYXQtdHJlZS1ub2RlXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtc2VsZWN0ZWRdPVwibm9kZS5jdXJyZW50U3RhdGUgPT09IGFwcGxpY2F0aW9uU3RhdGVzLlNUQVRFX0FDVElWRSA/ICd0cnVlJzogJ2ZhbHNlJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0VHJlZU5vZGVUb2dnbGUgW2F0dHIuYXJpYS1sYWJlbF09XCIndG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7dHJlZUNvbnRyb2wuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie25vZGU6bm9kZSwgY3VycmVudFN0YXRlOm5vZGUuY3VycmVudFN0YXRlfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbWF0LXRyZWUtbm9kZT5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9tYXQtdHJlZT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjcHJvZ3Jlc3NFbGVtZW50IGxldC1ub2RlPVwibm9kZVwiIGxldC1jdXJyZW50U3RhdGU9XCJjdXJyZW50U3RhdGVcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3MtYmFyLWVsZW1lbnQgcHJvZ3Jlc3MtYmFyLWVsZW1lbnQtLXt7Y3VycmVudFN0YXRlfX0gcHJvZ3Jlc3MtYmFyLWVsZW1lbnQtLXt7bm9kZS5ub2RlVHlwZX19XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJub2RlLnN0YXRlc1tjdXJyZW50U3RhdGVdXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwibm9kZVsnc3RhdGVzJ11bY3VycmVudFN0YXRlXVsnc3RhdGVfaWNvbiddXCIgYWx0PVwie3tub2RlLm5hbWUrJyAnKyBjdXJyZW50U3RhdGUgKycgaWNvbid9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9ncmVzcy1iYXItZWxlbWVudC1pbWFnZSBwcm9ncmVzcy1iYXItZWxlbWVudC1pbWFnZS0te3tjdXJyZW50U3RhdGV9fSBwcm9ncmVzcy1iYXItZWxlbWVudC1pbWFnZS0te3tub2RlLm5vZGVUeXBlfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwibm9kZS5zdGF0ZXNbY3VycmVudFN0YXRlXS5zdGF0ZV9pY29uICYmIG5vZGUuc3RhdGVzW2N1cnJlbnRTdGF0ZV0uc3RhdGVfc3R5bGUgIT09ICdjb2xvcidcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJuYXZpZ2F0ZShub2RlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzLWJhci1lbGVtZW50LW5hbWUgcHJvZ3Jlc3MtYmFyLWVsZW1lbnQtbmFtZS0te3tjdXJyZW50U3RhdGV9fSBwcm9ncmVzcy1iYXItZWxlbWVudC1uYW1lLS17e25vZGUubm9kZVR5cGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzSFRNTChub2RlLm5hbWUpICYmIG5vZGUuc3RhdGVzW2N1cnJlbnRTdGF0ZV0uc3RhdGVfc3R5bGUgIT09ICdpY29uJ1wiIChjbGljayk9XCJuYXZpZ2F0ZShub2RlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5jb2xvcl09XCJub2RlLnN0YXRlc1tjdXJyZW50U3RhdGVdLnN0YXRlX2NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bm9kZS5uYW1lfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInByb2dyZXNzLWJhci1lbGVtZW50LW5hbWUgcHJvZ3Jlc3MtYmFyLWVsZW1lbnQtbmFtZS0te3tjdXJyZW50U3RhdGV9fSBwcm9ncmVzcy1iYXItZWxlbWVudC1uYW1lLS17e25vZGUubm9kZVR5cGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNIVE1MKG5vZGUubmFtZSkgJiYgbm9kZS5zdGF0ZXNbY3VycmVudFN0YXRlXS5zdGF0ZV9zdHlsZSAhPT0gJ2ljb24nXCIgW2lubmVySFRNTF09XCJub2RlLm5hbWVcIiAoY2xpY2spPVwibmF2aWdhdGUobm9kZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUuY29sb3JdPVwibm9kZS5zdGF0ZXNbY3VycmVudFN0YXRlXS5zdGF0ZV9jb2xvclwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuPC9kaXY+Il19