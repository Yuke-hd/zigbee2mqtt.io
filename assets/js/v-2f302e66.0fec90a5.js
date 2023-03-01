"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[71301],{599140:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-2f302e66","path":"/devices/TS0601_rcbo.html","title":"TuYa TS0601_rcbo control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS0601_rcbo control via MQTT","description":"Integrate your TuYa TS0601_rcbo via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"excerpt":"","headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Meter_number (text)","slug":"meter-number-text","link":"#meter-number-text","children":[]},{"level":3,"title":"State (binary)","slug":"state-binary","link":"#state-binary","children":[]},{"level":3,"title":"Alarm (text)","slug":"alarm-text","link":"#alarm-text","children":[]},{"level":3,"title":"Trip (binary)","slug":"trip-binary","link":"#trip-binary","children":[]},{"level":3,"title":"Child_lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Power_on_behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Countdown_timer (numeric)","slug":"countdown-timer-numeric","link":"#countdown-timer-numeric","children":[]},{"level":3,"title":"Voltage_rms (numeric)","slug":"voltage-rms-numeric","link":"#voltage-rms-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Current_average (numeric)","slug":"current-average-numeric","link":"#current-average-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Energy_consumed (numeric)","slug":"energy-consumed-numeric","link":"#energy-consumed-numeric","children":[]},{"level":3,"title":"Clear_device_data (enum)","slug":"clear-device-data-enum","link":"#clear-device-data-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1677686651000},"filePathRelative":"devices/TS0601_rcbo.md"}')},277514:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var r=o(166252);const a=(0,r._)("h1",{id:"tuya-ts0601-rcbo",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#tuya-ts0601-rcbo","aria-hidden":"true"},"#"),(0,r.Uk)(" TuYa TS0601_rcbo")],-1),i=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"TS0601_rcbo")],-1),d=(0,r._)("td",null,"Vendor",-1),c=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"DIN mount RCBO with smart energy metering")],-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"meter_number, state, alarm, trip, child_lock, power_on_behavior, countdown_timer, voltage_rms, current, current_average, power, voltage, energy, temperature, energy_consumed, clear_device_data, linkquality")],-1),u=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_rcbo.jpg",alt:"TuYa TS0601_rcbo"})])],-1),s=(0,r._)("tr",null,[(0,r._)("td",null,"White-label"),(0,r._)("td",null,"HOCH ZJSBL7-100Z, WDYK ZJSBL7-100Z")],-1),h=(0,r.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="meter-number-text" tabindex="-1"><a class="header-anchor" href="#meter-number-text" aria-hidden="true">#</a> Meter_number (text)</h3><p>Value can be found in the published state on the <code>meter_number</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary" aria-hidden="true">#</a> State (binary)</h3><p>Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="alarm-text" tabindex="-1"><a class="header-anchor" href="#alarm-text" aria-hidden="true">#</a> Alarm (text)</h3><p>Value can be found in the published state on the <code>alarm</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="trip-binary" tabindex="-1"><a class="header-anchor" href="#trip-binary" aria-hidden="true">#</a> Trip (binary)</h3><p>Value can be found in the published state on the <code>trip</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trip&quot;: NEW_VALUE}</code>. If value equals <code>trip</code> trip is ON, if <code>clear</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary" aria-hidden="true">#</a> Child_lock (binary)</h3><p>Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child_lock is ON, if <code>OFF</code> OFF.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power_on_behavior (enum)</h3><p>Value can be found in the published state on the <code>power_on_behavior</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>previous</code>.</p><h3 id="countdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-timer-numeric" aria-hidden="true">#</a> Countdown_timer (numeric)</h3><p>Value can be found in the published state on the <code>countdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>86400</code>. The unit of this value is <code>s</code>.</p><h3 id="voltage-rms-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-rms-numeric" aria-hidden="true">#</a> Voltage_rms (numeric)</h3><p>Value can be found in the published state on the <code>voltage_rms</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-average-numeric" tabindex="-1"><a class="header-anchor" href="#current-average-numeric" aria-hidden="true">#</a> Current_average (numeric)</h3><p>Value can be found in the published state on the <code>current_average</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="energy-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#energy-consumed-numeric" aria-hidden="true">#</a> Energy_consumed (numeric)</h3><p>Value can be found in the published state on the <code>energy_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="clear-device-data-enum" tabindex="-1"><a class="header-anchor" href="#clear-device-data-enum" aria-hidden="true">#</a> Clear_device_data (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_device_data&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',35),p={},m=(0,o(983744).Z)(p,[["render",function(e,t){const o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),a,(0,r._)("table",null,[i,(0,r._)("tbody",null,[n,(0,r._)("tr",null,[d,(0,r._)("td",null,[(0,r.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,r.w5)((()=>[(0,r.Uk)("TuYa")])),_:1})])]),c,l,u,s])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,r.kq)(" Notes END: Do not edit below this line "),h])}]])}}]);