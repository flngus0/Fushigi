#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 9, std140) uniform _fp_c8
{
    precise vec4 data[4096];
} fp_c8;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

uint local_memory[16];
layout (binding = 0) uniform sampler2D fp_t_tcb_26;
layout (binding = 1) uniform sampler2D fp_t_tcb_36;
layout (binding = 2) uniform sampler2D fp_t_tcb_24;
layout (binding = 3) uniform sampler2D fp_t_tcb_22;
layout (binding = 4) uniform sampler2D fp_t_tcb_20;
layout (binding = 5) uniform samplerCube fp_t_tcb_16;
layout (binding = 6) uniform samplerCube fp_t_tcb_18;
layout (binding = 7) uniform samplerCubeArray fp_t_tcb_14;
layout (binding = 8) uniform sampler3D fp_t_cb7_20;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;
layout (location = 6) in vec4 in_attr6;
layout (location = 8) in vec4 in_attr8;
layout (location = 9) in vec4 in_attr9;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise vec3 temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec3 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise vec4 temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise vec3 temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    uint temp_207;
    precise float temp_208;
    precise float temp_209;
    precise float temp_210;
    precise float temp_211;
    precise float temp_212;
    int temp_213;
    precise float temp_214;
    int temp_215;
    uint temp_216;
    uint temp_217;
    int temp_218;
    precise float temp_219;
    precise float temp_220;
    precise float temp_221;
    precise float temp_222;
    precise float temp_223;
    precise float temp_224;
    precise float temp_225;
    precise float temp_226;
    precise float temp_227;
    precise float temp_228;
    precise float temp_229;
    precise float temp_230;
    precise float temp_231;
    precise float temp_232;
    precise float temp_233;
    precise float temp_234;
    precise float temp_235;
    precise float temp_236;
    precise float temp_237;
    precise float temp_238;
    precise float temp_239;
    precise float temp_240;
    precise float temp_241;
    precise float temp_242;
    precise float temp_243;
    precise float temp_244;
    precise float temp_245;
    precise float temp_246;
    precise float temp_247;
    precise float temp_248;
    precise float temp_249;
    precise float temp_250;
    precise float temp_251;
    precise float temp_252;
    precise float temp_253;
    precise float temp_254;
    precise float temp_255;
    precise float temp_256;
    precise float temp_257;
    precise float temp_258;
    precise float temp_259;
    precise float temp_260;
    precise float temp_261;
    precise float temp_262;
    precise float temp_263;
    precise float temp_264;
    precise float temp_265;
    precise float temp_266;
    precise float temp_267;
    precise float temp_268;
    precise float temp_269;
    precise float temp_270;
    precise float temp_271;
    precise float temp_272;
    precise float temp_273;
    precise float temp_274;
    precise float temp_275;
    precise float temp_276;
    precise float temp_277;
    precise float temp_278;
    precise float temp_279;
    precise float temp_280;
    precise float temp_281;
    precise float temp_282;
    bool temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    precise float temp_289;
    precise float temp_290;
    precise float temp_291;
    precise float temp_292;
    precise float temp_293;
    precise float temp_294;
    precise float temp_295;
    precise float temp_296;
    precise float temp_297;
    precise float temp_298;
    precise float temp_299;
    precise float temp_300;
    precise float temp_301;
    precise float temp_302;
    precise float temp_303;
    precise float temp_304;
    precise float temp_305;
    precise float temp_306;
    precise float temp_307;
    precise float temp_308;
    precise float temp_309;
    precise float temp_310;
    precise float temp_311;
    precise float temp_312;
    precise float temp_313;
    precise float temp_314;
    precise float temp_315;
    precise float temp_316;
    precise float temp_317;
    precise float temp_318;
    precise float temp_319;
    precise float temp_320;
    precise float temp_321;
    precise float temp_322;
    precise float temp_323;
    precise float temp_324;
    precise float temp_325;
    precise float temp_326;
    precise float temp_327;
    precise float temp_328;
    precise float temp_329;
    precise float temp_330;
    precise float temp_331;
    precise float temp_332;
    precise float temp_333;
    precise float temp_334;
    precise float temp_335;
    int temp_336;
    bool temp_337;
    int temp_338;
    int temp_339;
    int temp_340;
    int temp_341;
    uint temp_342;
    uint temp_343;
    int temp_344;
    precise float temp_345;
    precise float temp_346;
    precise float temp_347;
    precise float temp_348;
    int temp_349;
    int temp_350;
    uint temp_351;
    uint temp_352;
    int temp_353;
    precise float temp_354;
    int temp_355;
    uint temp_356;
    int temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    uint temp_361;
    int temp_362;
    precise float temp_363;
    int temp_364;
    uint temp_365;
    int temp_366;
    precise float temp_367;
    int temp_368;
    uint temp_369;
    uint temp_370;
    int temp_371;
    precise float temp_372;
    int temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    precise float temp_377;
    precise float temp_378;
    precise float temp_379;
    precise float temp_380;
    precise float temp_381;
    precise float temp_382;
    precise float temp_383;
    precise float temp_384;
    precise float temp_385;
    precise float temp_386;
    precise float temp_387;
    precise float temp_388;
    precise float temp_389;
    precise float temp_390;
    precise float temp_391;
    precise float temp_392;
    precise float temp_393;
    precise float temp_394;
    precise float temp_395;
    precise float temp_396;
    int temp_397;
    uint temp_398;
    uint temp_399;
    int temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    int temp_404;
    uint temp_405;
    uint temp_406;
    int temp_407;
    precise float temp_408;
    int temp_409;
    uint temp_410;
    int temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    precise float temp_415;
    precise float temp_416;
    precise float temp_417;
    int temp_418;
    uint temp_419;
    uint temp_420;
    int temp_421;
    precise float temp_422;
    int temp_423;
    uint temp_424;
    int temp_425;
    precise float temp_426;
    precise float temp_427;
    precise float temp_428;
    precise float temp_429;
    precise float temp_430;
    precise float temp_431;
    precise float temp_432;
    precise float temp_433;
    precise float temp_434;
    precise float temp_435;
    precise float temp_436;
    precise float temp_437;
    uint temp_438;
    int temp_439;
    bool temp_440;
    uint temp_441;
    precise float temp_442;
    precise float temp_443;
    precise float temp_444;
    precise float temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    uint temp_449;
    precise float temp_450;
    bool temp_451;
    precise float temp_452;
    precise float temp_453;
    precise float temp_454;
    precise float temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    precise float temp_459;
    precise float temp_460;
    precise float temp_461;
    precise float temp_462;
    precise float temp_463;
    precise float temp_464;
    precise float temp_465;
    precise float temp_466;
    precise float temp_467;
    precise float temp_468;
    precise float temp_469;
    precise float temp_470;
    precise float temp_471;
    precise float temp_472;
    precise float temp_473;
    precise float temp_474;
    precise float temp_475;
    precise float temp_476;
    precise float temp_477;
    precise float temp_478;
    int temp_479;
    uint temp_480;
    uint temp_481;
    int temp_482;
    precise float temp_483;
    precise float temp_484;
    precise float temp_485;
    precise float temp_486;
    precise float temp_487;
    precise float temp_488;
    precise float temp_489;
    uint temp_490;
    uint temp_491;
    int temp_492;
    precise float temp_493;
    int temp_494;
    uint temp_495;
    int temp_496;
    precise float temp_497;
    int temp_498;
    uint temp_499;
    uint temp_500;
    int temp_501;
    precise float temp_502;
    precise float temp_503;
    precise float temp_504;
    precise float temp_505;
    precise float temp_506;
    precise float temp_507;
    precise float temp_508;
    precise float temp_509;
    precise float temp_510;
    precise float temp_511;
    precise float temp_512;
    precise float temp_513;
    precise float temp_514;
    precise float temp_515;
    precise float temp_516;
    precise float temp_517;
    precise float temp_518;
    precise float temp_519;
    precise float temp_520;
    precise float temp_521;
    precise float temp_522;
    precise float temp_523;
    precise float temp_524;
    precise float temp_525;
    precise float temp_526;
    precise float temp_527;
    precise float temp_528;
    precise float temp_529;
    precise float temp_530;
    precise float temp_531;
    precise float temp_532;
    precise float temp_533;
    precise float temp_534;
    precise float temp_535;
    precise float temp_536;
    precise float temp_537;
    precise float temp_538;
    precise float temp_539;
    precise float temp_540;
    precise float temp_541;
    precise float temp_542;
    precise float temp_543;
    precise float temp_544;
    precise float temp_545;
    precise float temp_546;
    precise float temp_547;
    precise float temp_548;
    precise float temp_549;
    precise float temp_550;
    precise float temp_551;
    precise float temp_552;
    precise float temp_553;
    precise float temp_554;
    precise float temp_555;
    precise float temp_556;
    precise float temp_557;
    precise float temp_558;
    precise float temp_559;
    precise float temp_560;
    precise float temp_561;
    precise float temp_562;
    precise float temp_563;
    precise float temp_564;
    precise float temp_565;
    precise float temp_566;
    precise float temp_567;
    precise float temp_568;
    precise float temp_569;
    precise float temp_570;
    int temp_571;
    precise float temp_572;
    precise float temp_573;
    precise float temp_574;
    precise float temp_575;
    precise float temp_576;
    precise float temp_577;
    precise float temp_578;
    precise float temp_579;
    precise float temp_580;
    precise float temp_581;
    precise float temp_582;
    precise float temp_583;
    precise float temp_584;
    precise float temp_585;
    precise float temp_586;
    precise float temp_587;
    precise float temp_588;
    precise float temp_589;
    precise float temp_590;
    precise float temp_591;
    precise float temp_592;
    precise float temp_593;
    precise float temp_594;
    precise float temp_595;
    precise float temp_596;
    precise float temp_597;
    precise float temp_598;
    precise float temp_599;
    precise float temp_600;
    precise float temp_601;
    precise float temp_602;
    precise float temp_603;
    precise float temp_604;
    precise float temp_605;
    precise float temp_606;
    precise float temp_607;
    precise float temp_608;
    precise float temp_609;
    precise float temp_610;
    precise vec3 temp_611;
    precise float temp_612;
    precise float temp_613;
    precise float temp_614;
    precise vec3 temp_615;
    precise float temp_616;
    precise float temp_617;
    precise float temp_618;
    precise vec3 temp_619;
    precise float temp_620;
    precise float temp_621;
    precise float temp_622;
    precise float temp_623;
    precise float temp_624;
    precise float temp_625;
    precise float temp_626;
    precise float temp_627;
    precise float temp_628;
    precise float temp_629;
    precise float temp_630;
    precise float temp_631;
    precise float temp_632;
    precise float temp_633;
    precise float temp_634;
    precise float temp_635;
    precise float temp_636;
    precise float temp_637;
    precise float temp_638;
    precise float temp_639;
    precise float temp_640;
    precise float temp_641;
    precise float temp_642;
    precise float temp_643;
    precise float temp_644;
    precise float temp_645;
    precise float temp_646;
    precise float temp_647;
    precise float temp_648;
    precise float temp_649;
    precise float temp_650;
    precise float temp_651;
    precise float temp_652;
    precise float temp_653;
    precise float temp_654;
    precise float temp_655;
    precise float temp_656;
    precise float temp_657;
    precise float temp_658;
    precise float temp_659;
    precise float temp_660;
    precise float temp_661;
    precise float temp_662;
    precise float temp_663;
    precise float temp_664;
    precise float temp_665;
    precise float temp_666;
    precise float temp_667;
    precise float temp_668;
    precise float temp_669;
    precise float temp_670;
    precise float temp_671;
    precise float temp_672;
    precise float temp_673;
    precise float temp_674;
    precise float temp_675;
    precise float temp_676;
    precise float temp_677;
    precise float temp_678;
    precise float temp_679;
    precise float temp_680;
    precise float temp_681;
    precise float temp_682;
    precise float temp_683;
    precise float temp_684;
    precise float temp_685;
    precise float temp_686;
    precise float temp_687;
    precise float temp_688;
    precise float temp_689;
    precise float temp_690;
    precise float temp_691;
    precise float temp_692;
    precise float temp_693;
    precise float temp_694;
    precise float temp_695;
    precise float temp_696;
    precise float temp_697;
    precise float temp_698;
    precise float temp_699;
    precise float temp_700;
    precise float temp_701;
    precise float temp_702;
    precise float temp_703;
    precise float temp_704;
    precise float temp_705;
    precise float temp_706;
    precise float temp_707;
    precise float temp_708;
    precise float temp_709;
    precise float temp_710;
    precise float temp_711;
    precise float temp_712;
    precise float temp_713;
    precise float temp_714;
    precise float temp_715;
    precise float temp_716;
    precise float temp_717;
    precise float temp_718;
    precise float temp_719;
    precise float temp_720;
    precise float temp_721;
    precise float temp_722;
    precise float temp_723;
    precise float temp_724;
    precise float temp_725;
    precise float temp_726;
    precise float temp_727;
    precise float temp_728;
    precise float temp_729;
    precise float temp_730;
    precise float temp_731;
    precise float temp_732;
    precise float temp_733;
    precise float temp_734;
    precise float temp_735;
    precise float temp_736;
    precise float temp_737;
    precise float temp_738;
    precise float temp_739;
    precise float temp_740;
    precise float temp_741;
    precise float temp_742;
    precise float temp_743;
    precise float temp_744;
    precise float temp_745;
    precise float temp_746;
    precise float temp_747;
    precise float temp_748;
    precise float temp_749;
    precise float temp_750;
    precise float temp_751;
    precise float temp_752;
    precise float temp_753;
    precise float temp_754;
    precise float temp_755;
    precise float temp_756;
    precise float temp_757;
    precise float temp_758;
    precise float temp_759;
    precise float temp_760;
    precise float temp_761;
    precise float temp_762;
    precise float temp_763;
    precise float temp_764;
    precise float temp_765;
    precise float temp_766;
    precise float temp_767;
    precise float temp_768;
    precise float temp_769;
    precise float temp_770;
    precise float temp_771;
    precise float temp_772;
    precise float temp_773;
    precise float temp_774;
    precise float temp_775;
    precise float temp_776;
    precise float temp_777;
    precise float temp_778;
    precise float temp_779;
    precise float temp_780;
    precise float temp_781;
    precise float temp_782;
    precise float temp_783;
    precise float temp_784;
    precise float temp_785;
    precise float temp_786;
    precise float temp_787;
    precise float temp_788;
    precise float temp_789;
    precise float temp_790;
    precise float temp_791;
    precise float temp_792;
    precise float temp_793;
    precise float temp_794;
    precise float temp_795;
    precise float temp_796;
    precise float temp_797;
    precise float temp_798;
    precise float temp_799;
    precise float temp_800;
    precise float temp_801;
    precise float temp_802;
    // 0x000008: 0x4C9807940387003E Mov
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0E Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0F Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0F70E00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036080F70E26 Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024090F70E06 Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF02 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF890107FF0A Ipa
    temp_14 = in_attr1.x;
    // 0x000070: 0xE043FF8A4107FF03 Ipa
    temp_15 = in_attr2.y;
    // 0x000078: 0xE043FF894107FF0B Ipa
    temp_16 = in_attr1.y;
    // 0x000088: 0xE043FF8A8107FF04 Ipa
    temp_17 = in_attr2.z;
    // 0x000090: 0xE043FF898107FF0C Ipa
    temp_18 = in_attr1.z;
    // 0x000098: 0xE043FF880107FF11 Ipa
    temp_19 = in_attr0.x;
    // 0x0000A8: 0xE043FF884107FF12 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8B0107FF28 Ipa
    temp_21 = in_attr3.x;
    // 0x0000B8: 0xE043FF8B4107FF1A Ipa
    temp_22 = in_attr3.y;
    // 0x0000C8: 0xE043FF888107FF0F Ipa
    temp_23 = in_attr0.z;
    // 0x0000D0: 0x5C68100000270205 Fmul
    temp_24 = temp_13 * temp_13;
    // 0x0000D8: 0x5C68100000A70A0D Fmul
    temp_25 = temp_14 * temp_14;
    // 0x0000E8: 0x59A0028000370305 Ffma
    temp_26 = fma(temp_15, temp_15, temp_24);
    // 0x0000F0: 0x59A0068000B70B0D Ffma
    temp_27 = fma(temp_16, temp_16, temp_25);
    // 0x0000F8: 0x5C68100001171113 Fmul
    temp_28 = temp_19 * temp_19;
    // 0x000108: 0x59A0028000470405 Ffma
    temp_29 = fma(temp_17, temp_17, temp_26);
    // 0x000110: 0x59A0068000C70C0D Ffma
    temp_30 = fma(temp_18, temp_18, temp_27);
    // 0x000118: 0x5080000000570505 Mufu
    temp_31 = inversesqrt(temp_29);
    // 0x000128: 0x4C9807940397003A Mov
    // 0x000130: 0x5080000000570D0D Mufu
    temp_32 = inversesqrt(temp_30);
    // 0x000138: 0x5C6810000057020E Fmul
    temp_33 = temp_13 * temp_31;
    // 0x000148: 0x5C68100000570303 Fmul
    temp_34 = temp_15 * temp_31;
    // 0x000150: 0x5C68100000570404 Fmul
    temp_35 = temp_17 * temp_31;
    // 0x000158: 0x5C68100000D70C02 Fmul
    temp_36 = temp_18 * temp_32;
    // 0x000168: 0x59A009800127120C Ffma
    temp_37 = fma(temp_20, temp_20, temp_28);
    // 0x000170: 0x5C68100000D70A0A Fmul
    temp_38 = temp_14 * temp_32;
    // 0x000178: 0x5C68100000D70B0B Fmul
    temp_39 = temp_16 * temp_32;
    // 0x000188: 0x59A0060000F70F0C Ffma
    temp_40 = fma(temp_23, temp_23, temp_37);
    // 0x000190: 0x5080000000570C0C Mufu
    temp_41 = inversesqrt(temp_40);
    // 0x000198: 0x5C68100000C71111 Fmul
    temp_42 = temp_19 * temp_41;
    // 0x0001A8: 0x5C68100000C71212 Fmul
    temp_43 = temp_20 * temp_41;
    // 0x0001B0: 0x5C68100000C70F0F Fmul
    temp_44 = temp_23 * temp_41;
    // 0x0001B8: 0xF0F0000034270000 Depbar
    // 0x0001C8: 0x5C68100000170105 Fmul
    temp_45 = temp_4 * temp_4;
    // 0x0001D0: 0x59A0028000070005 Ffma
    temp_46 = fma(temp_3, temp_3, temp_45);
    // 0x0001D8: 0x385D103F8007050D Fadd
    temp_47 = 0.0 - temp_46;
    temp_48 = temp_47 + 1.0;
    temp_49 = clamp(temp_48, 0.0, 1.0);
    // 0x0001E8: 0x5C68100000170E05 Fmul
    temp_50 = temp_33 * temp_4;
    // 0x0001F0: 0x5080000000870D14 Mufu
    temp_51 = sqrt(temp_49);
    // 0x0001F8: 0x59A0028000070A0A Ffma
    temp_52 = fma(temp_38, temp_3, temp_50);
    // 0x000208: 0x5C68100000170305 Fmul
    temp_53 = temp_34 * temp_4;
    // 0x000210: 0x5C68100000170401 Fmul
    temp_54 = temp_35 * temp_4;
    // 0x000218: 0xE003FF870FF7FF04 Ipa
    temp_55 = gl_FragCoord.x;
    temp_56 = support_buffer.render_scale[0];
    temp_57 = temp_55 / temp_56;
    // 0x000228: 0x59A0028000070B05 Ffma
    temp_58 = fma(temp_39, temp_3, temp_53);
    // 0x000230: 0xE003FF874FF7FF0B Ipa
    temp_59 = gl_FragCoord.y;
    temp_60 = support_buffer.render_scale[0];
    temp_61 = temp_59 / temp_60;
    // 0x000238: 0x59A005000147110A Ffma
    temp_62 = fma(temp_42, temp_51, temp_52);
    // 0x000248: 0x59A0008000070201 Ffma
    temp_63 = fma(temp_36, temp_3, temp_54);
    // 0x000250: 0x59A0028001471205 Ffma
    temp_64 = fma(temp_43, temp_51, temp_58);
    // 0x000258: 0x5C68100000A70A00 Fmul
    temp_65 = temp_62 * temp_62;
    // 0x000268: 0x59A0008001470F01 Ffma
    temp_66 = fma(temp_44, temp_51, temp_63);
    // 0x000270: 0x59A0000000570500 Ffma
    temp_67 = fma(temp_64, temp_64, temp_65);
    // 0x000278: 0x59A0000000170100 Ffma
    temp_68 = fma(temp_66, temp_66, temp_67);
    // 0x000288: 0x5080000000570000 Mufu
    temp_69 = inversesqrt(temp_68);
    // 0x000290: 0x5C6810000007012A Fmul
    temp_70 = temp_66 * temp_69;
    // 0x000298: 0x5C68100000070501 Fmul
    temp_71 = temp_64 * temp_69;
    // 0x0002A8: 0x5C68100000070A29 Fmul
    temp_72 = temp_62 * temp_69;
    // 0x0002B0: 0x4C68100C04A7040A Fmul
    temp_73 = temp_57 * fp_c3.data[18].z;
    // 0x0002B8: 0x4C68100C04B70B05 Fmul
    temp_74 = temp_61 * fp_c3.data[18].w;
    // 0x0002C8: 0x4C68100C00672A03 Fmul
    temp_75 = temp_70 * fp_c3.data[1].z;
    // 0x0002D0: 0x4C68100C00272A02 Fmul
    temp_76 = temp_70 * fp_c3.data[0].z;
    // 0x0002D8: 0x49A0018C00570103 Ffma
    temp_77 = fma(temp_71, fp_c3.data[1].y, temp_75);
    // 0x0002E8: 0x49A0010C00170102 Ffma
    temp_78 = fma(temp_71, fp_c3.data[0].y, temp_76);
    // 0x0002F0: 0x49A0018C00472903 Ffma
    temp_79 = fma(temp_72, fp_c3.data[1].x, temp_77);
    // 0x0002F8: 0x49A0010C00072902 Ffma
    temp_80 = fma(temp_72, fp_c3.data[0].x, temp_78);
    // 0x000308: 0x4C69100C03E70303 Fmul
    temp_81 = 0.0 - fp_c3.data[15].z;
    temp_82 = temp_79 * temp_81;
    // 0x000310: 0x4C68101808B70200 Fmul
    temp_83 = temp_80 * fp_c6.data[34].w;
    // 0x000318: 0x4C68101808B70303 Fmul
    temp_84 = temp_82 * fp_c6.data[34].w;
    // 0x000328: 0x49A0050400270022 Ffma
    temp_85 = fma(temp_83, fp_c1.data[0].z, temp_73);
    // 0x000330: 0x49A0028400270323 Ffma
    temp_86 = fma(temp_84, fp_c1.data[0].z, temp_74);
    // 0x000338: 0xD832022222372224 Texs
    temp_87 = texture(fp_t_tcb_22, vec2(temp_85, temp_86)).xyzw;
    temp_88 = temp_87.x;
    temp_89 = temp_87.y;
    temp_90 = temp_87.z;
    temp_91 = temp_87.w;
    // 0x000348: 0xD822020000570A20 Texs
    temp_92 = texture(fp_t_tcb_20, vec2(temp_73, temp_74)).xyz;
    temp_93 = temp_92.x;
    temp_94 = temp_92.y;
    temp_95 = temp_92.z;
    // 0x000350: 0xE043FF8B8107FF12 Ipa
    temp_96 = in_attr3.z;
    // 0x000358: 0x5C68100002872803 Fmul
    temp_97 = temp_21 * temp_21;
    // 0x000368: 0xE2900000E5000000 Ssy
    // 0x000370: 0x01040DF760C7F00E Mov32i
    // 0x000378: 0xF0F0000034370000 Depbar
    // 0x000388: 0x4C5C101406372626 Fadd
    temp_98 = temp_6 + fp_c5.data[24].w;
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000390: 0x4C59101403473E3E Fadd
    temp_100 = 0.0 - fp_c5.data[14].x;
    temp_101 = temp_100 + fp_c5.data[13].x;
    // 0x000398: 0x4C59101403573A3A Fadd
    temp_102 = 0.0 - fp_c5.data[14].y;
    temp_103 = temp_102 + fp_c5.data[13].y;
    // 0x0003A8: 0x0103F8000007F035 Mov32i
    // 0x0003B0: 0x59A0018001A71A03 Ffma
    temp_104 = fma(temp_22, temp_22, temp_97);
    // 0x0003B8: 0x4C6810180A072626 Fmul
    temp_105 = temp_99 * fp_c6.data[40].x;
    // 0x0003C8: 0x59A0018001271203 Ffma
    temp_106 = fma(temp_96, temp_96, temp_104);
    // 0x0003D0: 0x5080000000570303 Mufu
    temp_107 = inversesqrt(temp_106);
    // 0x0003D8: 0x5C69100000372828 Fmul
    temp_108 = 0.0 - temp_107;
    temp_109 = temp_21 * temp_108;
    // 0x0003E8: 0x5C69100000371A1A Fmul
    temp_110 = 0.0 - temp_107;
    temp_111 = temp_22 * temp_110;
    // 0x0003F0: 0x5C69100000371212 Fmul
    temp_112 = 0.0 - temp_107;
    temp_113 = temp_96 * temp_112;
    // 0x0003F8: 0x4C58301805C72802 Fadd
    temp_114 = 0.0 - fp_c6.data[23].x;
    temp_115 = temp_109 + temp_114;
    // 0x000408: 0x4C58301805D71A04 Fadd
    temp_116 = 0.0 - fp_c6.data[23].y;
    temp_117 = temp_111 + temp_116;
    // 0x000410: 0x4C58301805E7120B Fadd
    temp_118 = 0.0 - fp_c6.data[23].z;
    temp_119 = temp_113 + temp_118;
    // 0x000418: 0x5C6810000027020D Fmul
    temp_120 = temp_115 * temp_115;
    // 0x000428: 0x59A006800047040D Ffma
    temp_121 = fma(temp_117, temp_117, temp_120);
    // 0x000430: 0x59A0068000B70B0D Ffma
    temp_122 = fma(temp_119, temp_119, temp_121);
    // 0x000438: 0x5080000000570D0D Mufu
    temp_123 = inversesqrt(temp_122);
    // 0x000448: 0x5C68100000D70202 Fmul
    temp_124 = temp_115 * temp_123;
    // 0x000450: 0x5C68100000D70404 Fmul
    temp_125 = temp_117 * temp_123;
    // 0x000458: 0x5C68100000D70B0B Fmul
    temp_126 = temp_119 * temp_123;
    // 0x000468: 0x4C69101805C70203 Fmul
    temp_127 = 0.0 - fp_c6.data[23].x;
    temp_128 = temp_124 * temp_127;
    // 0x000470: 0x5C6810000027280F Fmul
    temp_129 = temp_109 * temp_124;
    // 0x000478: 0x5C68100000272902 Fmul
    temp_130 = temp_72 * temp_124;
    // 0x000488: 0x49A1019805D7040C Ffma
    temp_131 = 0.0 - fp_c6.data[23].y;
    temp_132 = fma(temp_125, temp_131, temp_128);
    // 0x000490: 0x5C68100002872903 Fmul
    temp_133 = temp_72 * temp_109;
    // 0x000498: 0x59A0078000471A11 Ffma
    temp_134 = fma(temp_111, temp_125, temp_129);
    // 0x0004A8: 0x59A0010000470104 Ffma
    temp_135 = fma(temp_71, temp_125, temp_130);
    // 0x0004B0: 0x49A5061805E70B0C Ffma
    temp_136 = 0.0 - fp_c6.data[23].z;
    temp_137 = fma(temp_126, temp_136, temp_132);
    temp_138 = clamp(temp_137, 0.0, 1.0);
    // 0x0004B8: 0x59A0018001A70103 Ffma
    temp_139 = fma(temp_71, temp_111, temp_133);
    // 0x0004C8: 0x59A4088000B71211 Ffma
    temp_140 = fma(temp_113, temp_126, temp_134);
    temp_141 = clamp(temp_140, 0.0, 1.0);
    // 0x0004D0: 0x59A4020000B72A0B Ffma
    temp_142 = fma(temp_70, temp_126, temp_135);
    temp_143 = clamp(temp_142, 0.0, 1.0);
    // 0x0004D8: 0x4C69101805C72904 Fmul
    temp_144 = 0.0 - fp_c6.data[23].x;
    temp_145 = temp_72 * temp_144;
    // 0x0004E8: 0x49A2070400370C0D Ffma
    temp_146 = fma(temp_138, fp_c1.data[0].w, -6.98316002);
    // 0x0004F0: 0x59A4018001272A02 Ffma
    temp_147 = fma(temp_70, temp_113, temp_139);
    temp_148 = clamp(temp_147, 0.0, 1.0);
    // 0x0004F8: 0x49A207040037110E Ffma
    temp_149 = fma(temp_141, fp_c1.data[0].w, -6.98316002);
    // 0x000508: 0x386013BF80072603 Fmnmx
    temp_150 = min(temp_105, 1.0);
    // 0x000510: 0x49A1021805D70104 Ffma
    temp_151 = 0.0 - fp_c6.data[23].y;
    temp_152 = fma(temp_71, temp_151, temp_145);
    // 0x000518: 0x5C68100000D70C0D Fmul
    temp_153 = temp_138 * temp_146;
    // 0x000528: 0x3859103F8007020C Fadd
    temp_154 = 0.0 - temp_148;
    temp_155 = temp_154 + 1.0;
    // 0x000530: 0x5C68100000E7110E Fmul
    temp_156 = temp_141 * temp_149;
    // 0x000538: 0x5080000000370C0C Mufu
    temp_157 = log2(temp_155);
    // 0x000548: 0x4C60178400070303 Fmnmx
    temp_158 = max(temp_150, fp_c1.data[0].x);
    // 0x000550: 0x0103F0000007F011 Mov32i
    // 0x000558: 0x49A1021805E72A14 Ffma
    temp_159 = 0.0 - fp_c6.data[23].z;
    temp_160 = fma(temp_70, temp_159, temp_152);
    // 0x000568: 0x5C68100000272937 Fmul
    temp_161 = temp_72 * temp_148;
    // 0x000570: 0x5C90008000E70017 Rro
    // 0x000578: 0x51A401840007032D Ffma
    temp_162 = fma(temp_158, temp_158, fp_c1.data[0].x);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x000588: 0x5080000000271717 Mufu
    temp_164 = exp2(temp_156);
    // 0x000590: 0x32A008BF0007032B Ffma
    temp_165 = fma(temp_158, 0.5, 0.5);
    // 0x000598: 0x32A2144000073737 Ffma
    temp_166 = 0.0 - temp_109;
    temp_167 = fma(temp_161, 2.0, temp_166);
    // 0x0005A8: 0x4C68101406270C0F Fmul
    temp_168 = temp_157 * fp_c5.data[24].z;
    // 0x0005B0: 0x5C68100002D72D2C Fmul
    temp_169 = temp_163 * temp_163;
    // 0x0005B8: 0x4C98079403A7000C Mov
    // 0x0005C8: 0x5C68120002B72B2B Fmul
    temp_170 = temp_165 * 0.5;
    temp_171 = temp_170 * temp_165;
    // 0x0005D0: 0x5C90008000F7000F Rro
    // 0x0005D8: 0x59A2058002C70B11 Ffma
    temp_172 = 0.0 - temp_143;
    temp_173 = fma(temp_143, temp_169, temp_172);
    // 0x0005E8: 0x5084000000270F0F Mufu
    temp_174 = exp2(temp_168);
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x0005F0: 0x4C59101403670C04 Fadd
    temp_176 = 0.0 - fp_c5.data[14].z;
    temp_177 = temp_176 + fp_c5.data[13].z;
    // 0x0005F8: 0x5C5C30000FF7140C Fadd
    temp_178 = temp_160 + -0.0;
    temp_179 = clamp(temp_178, 0.0, 1.0);
    // 0x000608: 0x59A1010000272B15 Ffma
    temp_180 = 0.0 - temp_148;
    temp_181 = fma(temp_171, temp_180, temp_148);
    // 0x000610: 0x51A0088400170B11 Ffma
    temp_182 = fma(temp_143, temp_173, fp_c1.data[0].y);
    // 0x000618: 0x386810411007050B Fmul
    temp_183 = temp_74 * 9.0;
    // 0x000628: 0x5080000000471113 Mufu
    temp_184 = 1.0 / temp_182;
    // 0x000630: 0x5C58100001572B15 Fadd
    temp_185 = temp_171 + temp_181;
    // 0x000638: 0x5CA8148000B70A0B F2f
    temp_186 = floor(temp_183);
    // 0x000648: 0x59A1060000C72B05 Ffma
    temp_187 = 0.0 - temp_179;
    temp_188 = fma(temp_171, temp_187, temp_179);
    // 0x000650: 0x5080000000471515 Mufu
    temp_189 = 1.0 / temp_185;
    // 0x000658: 0x51A01F1403870F3E Ffma
    temp_190 = fma(temp_175, temp_101, fp_c5.data[14].x);
    // 0x000668: 0x51A01D1403970F3A Ffma
    temp_191 = fma(temp_175, temp_103, fp_c5.data[14].y);
    // 0x000670: 0x51A0021403A70F04 Ffma
    temp_192 = fma(temp_175, temp_177, fp_c5.data[14].z);
    // 0x000678: 0x3868104180070A0F Fmul
    temp_193 = temp_73 * 16.0;
    // 0x000688: 0x49A51A9403070811 Ffma
    temp_194 = 0.0 - fp_c5.data[12].x;
    temp_195 = fma(temp_8, temp_194, 1.0);
    temp_196 = clamp(temp_195, 0.0, 1.0);
    // 0x000690: 0x5CA8148000F70A16 F2f
    temp_197 = floor(temp_193);
    // 0x000698: 0x5C58100000572B0A Fadd
    temp_198 = temp_171 + temp_188;
    // 0x0006A8: 0x5080000000470A0A Mufu
    temp_199 = 1.0 / temp_198;
    // 0x0006B0: 0x5C68100001372D05 Fmul
    temp_200 = temp_163 * temp_184;
    // 0x0006B8: 0x5C90008000D70013 Rro
    // 0x0006C8: 0x4C98079808A7000D Mov
    // 0x0006D0: 0x5080000000271313 Mufu
    temp_201 = exp2(temp_153);
    // 0x0006D8: 0x3868103F0007152F Fmul
    temp_202 = temp_189 * 0.5;
    // 0x0006E8: 0x32A00B4180070B16 Ffma
    temp_203 = fma(temp_186, 16.0, temp_197);
    // 0x0006F0: 0x5C6810000057050B Fmul
    temp_204 = temp_200 * temp_200;
    // 0x0006F8: 0x5CB0118001670A2E F2i
    temp_205 = trunc(temp_203);
    temp_206 = max(temp_205, 0.0);
    temp_207 = uint(temp_206);
    // 0x000708: 0x5C68100000A72F05 Fmul
    temp_208 = temp_202 * temp_199;
    // 0x000710: 0x5C68100000570B0B Fmul
    temp_209 = temp_204 * temp_208;
    // 0x000718: 0xF0F0000034270000 Depbar
    // 0x000728: 0x4C68101402C70605 Fmul
    temp_210 = temp_10 * fp_c5.data[11].x;
    // 0x000730: 0x4C68101402D70706 Fmul
    temp_211 = temp_11 * fp_c5.data[11].y;
    // 0x000738: 0x4C68101402E70907 Fmul
    temp_212 = temp_12 * fp_c5.data[11].z;
    // 0x000748: 0x3848000000872E36 Shl
    temp_213 = int(temp_207) << 8;
    // 0x000750: 0x3858103F80070530 Fadd
    temp_214 = temp_210 + 1.0;
    // 0x000758: 0xEF94008200473636 Ldc
    temp_215 = temp_213 + 0x2004;
    temp_216 = uint(temp_215) >> 2;
    temp_217 = temp_216 >> 2;
    temp_218 = int(temp_216) & 3;
    temp_219 = fp_c8.data[int(temp_217)][temp_218];
    // 0x000768: 0x3858103F80070631 Fadd
    temp_220 = temp_211 + 1.0;
    // 0x000770: 0x5080000000473030 Mufu
    temp_221 = 1.0 / temp_214;
    // 0x000778: 0x3858103F80070732 Fadd
    temp_222 = temp_212 + 1.0;
    // 0x000788: 0x5080000000473131 Mufu
    temp_223 = 1.0 / temp_220;
    // 0x000790: 0x5C5810000057140A Fadd
    temp_224 = temp_160 + temp_210;
    // 0x000798: 0x5080000000473232 Mufu
    temp_225 = 1.0 / temp_222;
    // 0x0007A8: 0x5C5810000067140E Fadd
    temp_226 = temp_160 + temp_211;
    // 0x0007B0: 0x5C58100000771414 Fadd
    temp_227 = temp_160 + temp_212;
    // 0x0007B8: 0x4C58301407B70508 Fadd
    temp_228 = 0.0 - fp_c5.data[30].w;
    temp_229 = temp_210 + temp_228;
    // 0x0007C8: 0x4C58301407B70609 Fadd
    temp_230 = 0.0 - fp_c5.data[30].w;
    temp_231 = temp_211 + temp_230;
    // 0x0007D0: 0x49A01A8400470533 Ffma
    temp_232 = fma(temp_210, fp_c1.data[1].x, 1.0);
    // 0x0007D8: 0x49A01A8400470634 Ffma
    temp_233 = fma(temp_211, fp_c1.data[1].x, 1.0);
    // 0x0007E8: 0x5080000000473333 Mufu
    temp_234 = 1.0 / temp_232;
    // 0x0007F0: 0x49A01A8400470735 Ffma
    temp_235 = fma(temp_212, fp_c1.data[1].x, 1.0);
    // 0x0007F8: 0x5080000000473434 Mufu
    temp_236 = 1.0 / temp_233;
    // 0x000808: 0x5C68100003070A0F Fmul
    temp_237 = temp_224 * temp_221;
    // 0x000810: 0x5080000000473535 Mufu
    temp_238 = 1.0 / temp_235;
    // 0x000818: 0x4C58301407B7070A Fadd
    temp_239 = 0.0 - fp_c5.data[30].w;
    temp_240 = temp_212 + temp_239;
    // 0x000828: 0x5C68100003170E0E Fmul
    temp_241 = temp_226 * temp_223;
    // 0x000830: 0x5C68100003271414 Fmul
    temp_242 = temp_227 * temp_225;
    // 0x000838: 0x51A0041407B72708 Ffma
    temp_243 = fma(temp_7, temp_229, fp_c5.data[30].w);
    // 0x000848: 0x51A0049407B72709 Ffma
    temp_244 = fma(temp_7, temp_231, fp_c5.data[30].w);
    // 0x000850: 0x5C60178000F7FF15 Fmnmx
    temp_245 = max(0.0, temp_237);
    // 0x000858: 0x51A0051407B7270A Ffma
    temp_246 = fma(temp_7, temp_240, fp_c5.data[30].w);
    // 0x000868: 0x5C60178000E7FF0E Fmnmx
    temp_247 = max(0.0, temp_241);
    // 0x000870: 0x5C68100000B70C0B Fmul
    temp_248 = temp_179 * temp_209;
    // 0x000878: 0x5C6017800147FF14 Fmnmx
    temp_249 = max(0.0, temp_242);
    // 0x000888: 0x4C68101808770D0F Fmul
    temp_250 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x000890: 0x59A109800137080D Ffma
    temp_251 = 0.0 - temp_201;
    temp_252 = fma(temp_243, temp_251, temp_201);
    // 0x000898: 0x59A109800137090C Ffma
    temp_253 = 0.0 - temp_201;
    temp_254 = fma(temp_244, temp_253, temp_201);
    // 0x0008A8: 0x59A1098001370A13 Ffma
    temp_255 = 0.0 - temp_201;
    temp_256 = fma(temp_246, temp_255, temp_201);
    // 0x0008B0: 0x59A10B8001770816 Ffma
    temp_257 = 0.0 - temp_164;
    temp_258 = fma(temp_243, temp_257, temp_164);
    // 0x0008B8: 0x59A10B8001770918 Ffma
    temp_259 = 0.0 - temp_164;
    temp_260 = fma(temp_244, temp_259, temp_164);
    // 0x0008C8: 0x59A10B8001770A17 Ffma
    temp_261 = 0.0 - temp_164;
    temp_262 = fma(temp_246, temp_261, temp_164);
    // 0x0008D0: 0x5C68100003470E0E Fmul
    temp_263 = temp_247 * temp_236;
    // 0x0008D8: 0x5C68100003571414 Fmul
    temp_264 = temp_249 * temp_238;
    // 0x0008E8: 0x5C68100003371515 Fmul
    temp_265 = temp_245 * temp_234;
    // 0x0008F0: 0x5C58100000D7080D Fadd
    temp_266 = temp_243 + temp_252;
    // 0x0008F8: 0x5C58100000C7090C Fadd
    temp_267 = temp_244 + temp_254;
    // 0x000908: 0x5C58100001370A13 Fadd
    temp_268 = temp_246 + temp_256;
    // 0x000910: 0x5C5810000187091B Fadd
    temp_269 = temp_244 + temp_260;
    // 0x000918: 0x5C58100001770A1C Fadd
    temp_270 = temp_246 + temp_262;
    // 0x000928: 0x5C58100001670819 Fadd
    temp_271 = temp_243 + temp_258;
    // 0x000930: 0x4C68101801570E17 Fmul
    temp_272 = temp_263 * fp_c6.data[5].y;
    // 0x000938: 0x4C68101801671418 Fmul
    temp_273 = temp_264 * fp_c6.data[5].z;
    // 0x000948: 0x4C68101801471516 Fmul
    temp_274 = temp_265 * fp_c6.data[5].x;
    // 0x000950: 0x4C68101406470D0E Fmul
    temp_275 = temp_266 * fp_c5.data[25].x;
    // 0x000958: 0x4C68101406470C14 Fmul
    temp_276 = temp_267 * fp_c5.data[25].x;
    // 0x000968: 0x4C68101406471315 Fmul
    temp_277 = temp_268 * fp_c5.data[25].x;
    // 0x000970: 0x4C68101406471919 Fmul
    temp_278 = temp_271 * fp_c5.data[25].x;
    // 0x000978: 0x4C68101406471B1B Fmul
    temp_279 = temp_269 * fp_c5.data[25].x;
    // 0x000988: 0x1E23EA2F98371616 Fmul32i
    temp_280 = temp_274 * 0.318309873;
    // 0x000990: 0x1E23EA2F9837171D Fmul32i
    temp_281 = temp_272 * 0.318309873;
    // 0x000998: 0x4C68101406471C1C Fmul
    temp_282 = temp_270 * fp_c5.data[25].x;
    // 0x0009A8: 0x5B6603800FF73607 Isetp
    temp_283 = floatBitsToUint(temp_219) <= 0u;
    // 0x0009B0: 0x1E23EA2F98371813 Fmul32i
    temp_284 = temp_273 * 0.318309873;
    // 0x0009B8: 0x5C68100000272A17 Fmul
    temp_285 = temp_70 * temp_148;
    // 0x0009C8: 0x32A2094000071717 Ffma
    temp_286 = 0.0 - temp_113;
    temp_287 = fma(temp_285, 2.0, temp_286);
    // 0x0009D0: 0xF0F0000034170000 Depbar
    // 0x0009D8: 0x51A007980147240C Ffma
    temp_288 = fma(temp_88, temp_250, fp_c6.data[5].x);
    // 0x0009E8: 0x51A007980157250D Ffma
    temp_289 = fma(temp_89, temp_250, fp_c6.data[5].y);
    // 0x0009F0: 0x51A007980167220F Ffma
    temp_290 = fma(temp_90, temp_250, fp_c6.data[5].z);
    // 0x0009F8: 0x5C68100000E70C0C Fmul
    temp_291 = temp_288 * temp_275;
    // 0x000A08: 0x5C68100001470D0D Fmul
    temp_292 = temp_289 * temp_276;
    // 0x000A10: 0x5C68100001570F15 Fmul
    temp_293 = temp_290 * temp_277;
    // 0x000A18: 0x59A10B0001671914 Ffma
    temp_294 = 0.0 - temp_280;
    temp_295 = fma(temp_278, temp_294, temp_280);
    // 0x000A28: 0x49A208980AE71116 Ffma
    temp_296 = 0.0 - temp_196;
    temp_297 = fma(temp_196, fp_c6.data[43].z, temp_296);
    // 0x000A30: 0xEF5400000087FF14 Stl
    local_memory[2] = floatBitsToUint(temp_295);
    // 0x000A38: 0x59A10E8001D71B0F Ffma
    temp_298 = 0.0 - temp_281;
    temp_299 = fma(temp_279, temp_298, temp_281);
    // 0x000A48: 0x5C68100000C70B1E Fmul
    temp_300 = temp_248 * temp_291;
    // 0x000A50: 0xEF5400000047FF0F Stl
    local_memory[1] = floatBitsToUint(temp_299);
    // 0x000A58: 0x5C68100001570B26 Fmul
    temp_301 = temp_248 * temp_293;
    // 0x000A68: 0x49A208980AD71115 Ffma
    temp_302 = 0.0 - temp_196;
    temp_303 = fma(temp_196, fp_c6.data[43].y, temp_302);
    // 0x000A70: 0x5C68100000D70B1F Fmul
    temp_304 = temp_248 * temp_292;
    // 0x000A78: 0x3858103F8007161D Fadd
    temp_305 = temp_297 + 1.0;
    // 0x000A88: 0x59A1098001371C0E Ffma
    temp_306 = 0.0 - temp_284;
    temp_307 = fma(temp_282, temp_306, temp_284);
    // 0x000A90: 0x5C9807800FF7000B Mov
    // 0x000A98: 0xEF5400000007FF0E Stl
    local_memory[0] = floatBitsToUint(temp_307);
    // 0x000AA8: 0x49A208980AC71114 Ffma
    temp_308 = 0.0 - temp_196;
    temp_309 = fma(temp_196, fp_c6.data[43].x, temp_308);
    // 0x000AB0: 0x5C68100000270111 Fmul
    temp_310 = temp_71 * temp_148;
    // 0x000AB8: 0x3858103F80071515 Fadd
    temp_311 = temp_303 + 1.0;
    // 0x000AC8: 0x5C9807800FF7000C Mov
    // 0x000AD0: 0x5C9807800FF7000D Mov
    // 0x000AD8: 0x5C9807800FF7000F Mov
    // 0x000AE8: 0x3858103F80071414 Fadd
    temp_312 = temp_309 + 1.0;
    // 0x000AF0: 0x5C9807800FF70013 Mov
    // 0x000AF8: 0x32A20D4000071116 Ffma
    temp_313 = 0.0 - temp_111;
    temp_314 = fma(temp_310, 2.0, temp_313);
    // 0x000B08: 0x59A40A800157061C Ffma
    temp_315 = fma(temp_211, temp_311, temp_311);
    temp_316 = clamp(temp_315, 0.0, 1.0);
    // 0x000B10: 0x5C9807800FF7000E Mov
    // 0x000B18: 0x59A40E8001D7071D Ffma
    temp_317 = fma(temp_212, temp_305, temp_305);
    temp_318 = clamp(temp_317, 0.0, 1.0);
    // 0x000B28: 0x59A40A000147051B Ffma
    temp_319 = fma(temp_210, temp_312, temp_312);
    temp_320 = clamp(temp_319, 0.0, 1.0);
    // 0x000B30: 0x1E23E22F98371E1E Fmul32i
    temp_321 = temp_300 * 0.159154937;
    // 0x000B38: 0x1E23E22F98371F1F Fmul32i
    temp_322 = temp_304 * 0.159154937;
    // 0x000B48: 0x1E23E22F98372626 Fmul32i
    temp_323 = temp_301 * 0.159154937;
    // 0x000B50: 0xF0F800000000000F Sync
    temp_324 = 0.0;
    temp_325 = 0.0;
    temp_326 = 0.0;
    temp_327 = 0.0;
    temp_328 = 0.0;
    temp_329 = 0.0;
    temp_330 = 0.0;
    temp_331 = 0.0;
    temp_332 = 0.0;
    temp_333 = 0.0;
    temp_334 = 0.0;
    temp_335 = 0.0;
    if (!temp_283)
    {
        // 0x000B58: 0x5C9807800FF70038 Mov
        temp_336 = 0;
        do
        {
            // 0x000B68: 0x5C18020003872E19 Iscadd
            temp_338 = int(temp_207) << 4;
            temp_339 = temp_338 + temp_336;
            // 0x000B70: 0xE003FF87CFF7FF3B Ipa
            // 0x000B78: 0x3848000000471919 Shl
            temp_340 = temp_339 << 4;
            // 0x000B88: 0xE003FF87CFF7FF3D Ipa
            // 0x000B90: 0xE003FF87CFF7FF3C Ipa
            // 0x000B98: 0xE29000005F800000 Ssy
            // 0x000BA8: 0xEF94008200071919 Ldc
            temp_341 = temp_340 + 0x2000;
            temp_342 = uint(temp_341) >> 2;
            temp_343 = temp_342 >> 2;
            temp_344 = int(temp_342) & 3;
            temp_345 = fp_c8.data[int(temp_343)][temp_344];
            // 0x000BB0: 0x5080000000473B3B Mufu
            // 0x000BB8: 0x5080000000473D3D Mufu
            // 0x000BC8: 0x5080000000473C3C Mufu
            // 0x000BD0: 0xE043FF8D03B7FF3B Ipa
            temp_346 = in_attr5.x;
            // 0x000BD8: 0xE043FF8D83D7FF3D Ipa
            temp_347 = in_attr5.z;
            // 0x000BE8: 0xE043FF8D43C7FF3C Ipa
            temp_348 = in_attr5.y;
            // 0x000BF0: 0x3848000000671939 Shl
            temp_349 = floatBitsToInt(temp_345) << 6;
            // 0x000BF8: 0xEF95008001073910 Ldc
            temp_350 = temp_349 + 16;
            temp_351 = uint(temp_350) >> 2;
            temp_352 = temp_351 >> 2;
            temp_353 = int(temp_351) & 3;
            temp_354 = fp_c8.data[int(temp_352)][temp_353];
            temp_355 = int(temp_351) + 1;
            temp_356 = uint(temp_355) >> 2;
            temp_357 = temp_355 & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            // 0x000C08: 0xEF95008001873914 Ldc
            temp_359 = temp_349 + 24;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_360 >> 2;
            temp_362 = int(temp_360) & 3;
            temp_363 = fp_c8.data[int(temp_361)][temp_362];
            temp_364 = int(temp_360) + 1;
            temp_365 = uint(temp_364) >> 2;
            temp_366 = temp_364 & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            // 0x000C10: 0xEF95008002073918 Ldc
            temp_368 = temp_349 + 32;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_369 >> 2;
            temp_371 = int(temp_369) & 3;
            temp_372 = fp_c8.data[int(temp_370)][temp_371];
            temp_373 = int(temp_369) + 1;
            temp_374 = uint(temp_373) >> 2;
            temp_375 = temp_373 & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            // 0x000C18: 0x5C58300003B7103B Fadd
            temp_377 = 0.0 - temp_346;
            temp_378 = temp_354 + temp_377;
            // 0x000C28: 0x5C58300003C7113C Fadd
            temp_379 = 0.0 - temp_348;
            temp_380 = temp_358 + temp_379;
            // 0x000C30: 0x5C58300003D71414 Fadd
            temp_381 = 0.0 - temp_347;
            temp_382 = temp_363 + temp_381;
            // 0x000C38: 0x5C68100003B73B11 Fmul
            temp_383 = temp_378 * temp_378;
            // 0x000C48: 0x59A10A0001471510 Ffma
            temp_384 = 0.0 - temp_382;
            temp_385 = fma(temp_367, temp_384, temp_382);
            // 0x000C50: 0x59A0088003C73C15 Ffma
            temp_386 = fma(temp_380, temp_380, temp_383);
            // 0x000C58: 0x59A00A800107103D Ffma
            temp_387 = fma(temp_385, temp_385, temp_386);
            // 0x000C68: 0x5080000000573D11 Mufu
            temp_388 = inversesqrt(temp_387);
            // 0x000C70: 0x5080000000873D3D Mufu
            temp_389 = sqrt(temp_387);
            // 0x000C78: 0x5C68100001173B3F Fmul
            temp_390 = temp_378 * temp_388;
            // 0x000C88: 0x5C68100001171010 Fmul
            temp_391 = temp_385 * temp_388;
            // 0x000C90: 0x5C68100001173C11 Fmul
            temp_392 = temp_380 * temp_388;
            // 0x000C98: 0x5C69100001873F18 Fmul
            temp_393 = 0.0 - temp_372;
            temp_394 = temp_390 * temp_393;
            // 0x000CA8: 0x59A10C0001971111 Ffma
            temp_395 = 0.0 - temp_376;
            temp_396 = fma(temp_392, temp_395, temp_394);
            // 0x000CB0: 0xEF94008002873918 Ldc
            temp_397 = temp_349 + 40;
            temp_398 = uint(temp_397) >> 2;
            temp_399 = temp_398 >> 2;
            temp_400 = int(temp_398) & 3;
            temp_401 = fp_c8.data[int(temp_399)][temp_400];
            // 0x000CB8: 0x010404000007F019 Mov32i
            // 0x000CC8: 0x59A1088001871018 Ffma
            temp_402 = 0.0 - temp_401;
            temp_403 = fma(temp_391, temp_402, temp_396);
            // 0x000CD0: 0xEF95008003873910 Ldc
            temp_404 = temp_349 + 56;
            temp_405 = uint(temp_404) >> 2;
            temp_406 = temp_405 >> 2;
            temp_407 = int(temp_405) & 3;
            temp_408 = fp_c8.data[int(temp_406)][temp_407];
            temp_409 = int(temp_405) + 1;
            temp_410 = uint(temp_409) >> 2;
            temp_411 = temp_409 & 3;
            temp_412 = fp_c8.data[int(temp_410)][temp_411];
            // 0x000CD8: 0x59A4088001071810 Ffma
            temp_413 = fma(temp_403, temp_408, temp_412);
            temp_414 = clamp(temp_413, 0.0, 1.0);
            // 0x000CE8: 0x5C68100001071018 Fmul
            temp_415 = temp_414 * temp_414;
            // 0x000CF0: 0x33A00CC000071010 Ffma
            temp_416 = fma(temp_414, -2.0, 3.0);
            // 0x000CF8: 0x5C68100001071818 Fmul
            temp_417 = temp_415 * temp_416;
            // 0x000D08: 0xEF95008003073910 Ldc
            temp_418 = temp_349 + 48;
            temp_419 = uint(temp_418) >> 2;
            temp_420 = temp_419 >> 2;
            temp_421 = int(temp_419) & 3;
            temp_422 = fp_c8.data[int(temp_420)][temp_421];
            temp_423 = int(temp_419) + 1;
            temp_424 = uint(temp_423) >> 2;
            temp_425 = temp_423 & 3;
            temp_426 = fp_c8.data[int(temp_424)][temp_425];
            // 0x000D10: 0x59A4088003D7103D Ffma
            temp_427 = fma(temp_422, temp_389, temp_426);
            temp_428 = clamp(temp_427, 0.0, 1.0);
            // 0x000D18: 0x33A00CC000073D19 Ffma
            temp_429 = fma(temp_428, -2.0, 3.0);
            // 0x000D28: 0x5C68100003D73D3D Fmul
            temp_430 = temp_428 * temp_428;
            // 0x000D30: 0x5C68100003D71919 Fmul
            temp_431 = temp_429 * temp_430;
            // 0x000D38: 0x5C68100001971818 Fmul
            temp_432 = temp_417 * temp_431;
            // 0x000D48: 0x39585042F0071419 Fadd
            temp_433 = abs(temp_382);
            temp_434 = temp_433 + -120.0;
            // 0x000D50: 0x1EABD4CCCCD71919 Fmul32i
            temp_435 = temp_434 * -0.0500000007;
            temp_436 = clamp(temp_435, 0.0, 1.0);
            // 0x000D58: 0x5C68100001871918 Fmul
            temp_437 = temp_436 * temp_432;
            // 0x000D68: 0x36247F9000171919 Xmad
            temp_438 = floatBitsToUint(temp_436) >> 16;
            temp_439 = int(temp_438) << 16;
            // 0x000D70: 0x5BB383800FF71807 Fsetp
            temp_440 = temp_437 <= 0.0;
            // 0x000D78: 0x7A05083C0F00FF19 Hadd2
            temp_441 = uint(temp_439);
            temp_442 = temp_324;
            temp_443 = temp_325;
            temp_444 = temp_326;
            temp_445 = temp_327;
            temp_446 = temp_328;
            temp_447 = temp_329;
            if (temp_440)
            {
                temp_448 = unpackHalf2x16(uint(temp_439)).y;
                temp_449 = packHalf2x16(vec2(1.0, temp_448));
                temp_441 = temp_449;
            }
            // 0x000D88: 0x5D2103902FF71907 Hsetp2
            temp_450 = unpackHalf2x16(temp_441).x;
            temp_451 = temp_450 == 0.0;
            // 0x000D90: 0xF0F800000008000F Sync
            if (temp_451)
            {
                // 0x000D98: 0x5080000000471010 Mufu
                temp_452 = 1.0 / temp_422;
                // 0x000DA8: 0x5C69100001071110 Fmul
                temp_453 = 0.0 - temp_452;
                temp_454 = temp_426 * temp_453;
                // 0x000DB0: 0x5C60138001071414 Fmnmx
                temp_455 = min(temp_382, temp_454);
                // 0x000DB8: 0x5C61178001471010 Fmnmx
                temp_456 = 0.0 - temp_454;
                temp_457 = max(temp_456, temp_455);
                // 0x000DC8: 0x59A00A8001071015 Ffma
                temp_458 = fma(temp_457, temp_457, temp_386);
                // 0x000DD0: 0x5080000000571511 Mufu
                temp_459 = inversesqrt(temp_458);
                // 0x000DD8: 0x5080000000871515 Mufu
                temp_460 = sqrt(temp_458);
                // 0x000DE8: 0x5C68100001173B14 Fmul
                temp_461 = temp_378 * temp_459;
                // 0x000DF0: 0x5C68100001173C19 Fmul
                temp_462 = temp_380 * temp_459;
                // 0x000DF8: 0x5C68100001171010 Fmul
                temp_463 = temp_457 * temp_459;
                // 0x000E08: 0x5C5810000147283D Fadd
                temp_464 = temp_109 + temp_461;
                // 0x000E10: 0x5C58100001971A3C Fadd
                temp_465 = temp_111 + temp_462;
                // 0x000E18: 0x5C58100001071211 Fadd
                temp_466 = temp_113 + temp_463;
                // 0x000E28: 0x5C68100003D73D3B Fmul
                temp_467 = temp_464 * temp_464;
                // 0x000E30: 0x59A01D8003C73C3B Ffma
                temp_468 = fma(temp_465, temp_465, temp_467);
                // 0x000E38: 0x59A01D800117113B Ffma
                temp_469 = fma(temp_466, temp_466, temp_468);
                // 0x000E48: 0x5080000000573B3B Mufu
                temp_470 = inversesqrt(temp_469);
                // 0x000E50: 0x5C68100003B73D3D Fmul
                temp_471 = temp_464 * temp_470;
                // 0x000E58: 0x5C68100003B73C3C Fmul
                temp_472 = temp_465 * temp_470;
                // 0x000E68: 0x5C68100003B71111 Fmul
                temp_473 = temp_466 * temp_470;
                // 0x000E70: 0x5C68100003D7143B Fmul
                temp_474 = temp_461 * temp_471;
                // 0x000E78: 0x5C68100001472914 Fmul
                temp_475 = temp_72 * temp_461;
                // 0x000E88: 0x5C68100003D7293D Fmul
                temp_476 = temp_72 * temp_471;
                // 0x000E90: 0x59A01D8003C7193B Ffma
                temp_477 = fma(temp_462, temp_472, temp_474);
                // 0x000E98: 0x59A00A0001970119 Ffma
                temp_478 = fma(temp_71, temp_462, temp_475);
                // 0x000EA8: 0xEF94008002C73914 Ldc
                temp_479 = temp_349 + 44;
                temp_480 = uint(temp_479) >> 2;
                temp_481 = temp_480 >> 2;
                temp_482 = int(temp_480) & 3;
                temp_483 = fp_c8.data[int(temp_481)][temp_482];
                // 0x000EB0: 0x59A01E8003C7013C Ffma
                temp_484 = fma(temp_71, temp_472, temp_476);
                // 0x000EB8: 0x59A41D800117103B Ffma
                temp_485 = fma(temp_463, temp_473, temp_477);
                temp_486 = clamp(temp_485, 0.0, 1.0);
                // 0x000EC8: 0x59A00C8001072A19 Ffma
                temp_487 = fma(temp_70, temp_463, temp_478);
                // 0x000ED0: 0x59A41E0001172A3C Ffma
                temp_488 = fma(temp_70, temp_473, temp_484);
                temp_489 = clamp(temp_488, 0.0, 1.0);
                // 0x000ED8: 0xEF95008000073910 Ldc
                temp_490 = uint(temp_349) >> 2;
                temp_491 = temp_490 >> 2;
                temp_492 = int(temp_490) & 3;
                temp_493 = fp_c8.data[int(temp_491)][temp_492];
                temp_494 = int(temp_490) + 1;
                temp_495 = uint(temp_494) >> 2;
                temp_496 = temp_494 & 3;
                temp_497 = fp_c8.data[int(temp_495)][temp_496];
                // 0x000EE8: 0xEF94008000873939 Ldc
                temp_498 = temp_349 + 8;
                temp_499 = uint(temp_498) >> 2;
                temp_500 = temp_499 >> 2;
                temp_501 = int(temp_499) & 3;
                temp_502 = fp_c8.data[int(temp_500)][temp_501];
                // 0x000EF0: 0x5080000000471414 Mufu
                temp_503 = 1.0 / temp_483;
                // 0x000EF8: 0x5C68100001071810 Fmul
                temp_504 = temp_437 * temp_493;
                // 0x000F08: 0x5C68100001171811 Fmul
                temp_505 = temp_437 * temp_497;
                // 0x000F10: 0x51A00A8400571414 Ffma
                temp_506 = fma(temp_503, temp_460, fp_c1.data[1].y);
                // 0x000F18: 0x59A21E0003C72C15 Ffma
                temp_507 = 0.0 - temp_489;
                temp_508 = fma(temp_169, temp_489, temp_507);
                // 0x000F28: 0x5080000000471414 Mufu
                temp_509 = 1.0 / temp_506;
                // 0x000F30: 0x5C68100003971839 Fmul
                temp_510 = temp_437 * temp_502;
                // 0x000F38: 0x01040DF760C7F018 Mov32i
                // 0x000F48: 0x51A00A8400173C15 Ffma
                temp_511 = fma(temp_489, temp_508, fp_c1.data[0].y);
                // 0x000F50: 0x49A20C0400373B18 Ffma
                temp_512 = fma(temp_486, fp_c1.data[0].w, -6.98316002);
                // 0x000F58: 0x5080000000471515 Mufu
                temp_513 = 1.0 / temp_511;
                // 0x000F68: 0x1E23FB3333371414 Fmul32i
                temp_514 = temp_509 * 1.39999998;
                // 0x000F70: 0x5C68100001873B3B Fmul
                temp_515 = temp_486 * temp_512;
                // 0x000F78: 0x5C68100001471414 Fmul
                temp_516 = temp_514 * temp_514;
                // 0x000F88: 0x5C90008003B7003C Rro
                // 0x000F90: 0x5C68100001572D3B Fmul
                temp_517 = temp_163 * temp_513;
                // 0x000F98: 0x5080000000273C15 Mufu
                temp_518 = exp2(temp_515);
                // 0x000FA8: 0x59A10A0001471914 Ffma
                temp_519 = 0.0 - temp_516;
                temp_520 = fma(temp_487, temp_519, temp_516);
                // 0x000FB0: 0x5C68100003B73B3C Fmul
                temp_521 = temp_517 * temp_517;
                // 0x000FB8: 0x5C58100001471914 Fadd
                temp_522 = temp_487 + temp_520;
                // 0x000FC8: 0x5C5C30000FF71919 Fadd
                temp_523 = temp_487 + -0.0;
                temp_524 = clamp(temp_523, 0.0, 1.0);
                // 0x000FD0: 0x5C5810000147053B Fadd
                temp_525 = temp_210 + temp_522;
                // 0x000FD8: 0x59A10C8001972B18 Ffma
                temp_526 = 0.0 - temp_524;
                temp_527 = fma(temp_171, temp_526, temp_524);
                // 0x000FE8: 0x5C68100003B7303B Fmul
                temp_528 = temp_221 * temp_525;
                // 0x000FF0: 0x5C58100001872B18 Fadd
                temp_529 = temp_171 + temp_527;
                // 0x000FF8: 0x5080000000471818 Mufu
                temp_530 = 1.0 / temp_529;
                // 0x001008: 0x5C60178003B7FF3B Fmnmx
                temp_531 = max(0.0, temp_528);
                // 0x001010: 0x5C68100003B7333B Fmul
                temp_532 = temp_234 * temp_531;
                // 0x001018: 0x5C68100001872F18 Fmul
                temp_533 = temp_202 * temp_530;
                // 0x001028: 0x5C68100003B7103B Fmul
                temp_534 = temp_504 * temp_532;
                // 0x001030: 0x5C68100003C7183C Fmul
                temp_535 = temp_533 * temp_521;
                // 0x001038: 0x59A10A8001570818 Ffma
                temp_536 = 0.0 - temp_518;
                temp_537 = fma(temp_243, temp_536, temp_518);
                // 0x001048: 0x49A0070400773B0E Ffma
                temp_538 = fma(temp_534, fp_c1.data[1].w, temp_324);
                // 0x001050: 0x5C68100003C71919 Fmul
                temp_539 = temp_524 * temp_535;
                // 0x001058: 0x5C58100001870818 Fadd
                temp_540 = temp_243 + temp_537;
                // 0x001068: 0x4C6810140647183C Fmul
                temp_541 = temp_540 * fp_c5.data[25].x;
                // 0x001070: 0x5C58100001470618 Fadd
                temp_542 = temp_211 + temp_522;
                // 0x001078: 0x5C58100001470714 Fadd
                temp_543 = temp_212 + temp_522;
                // 0x001088: 0x5C68100001073C3C Fmul
                temp_544 = temp_541 * temp_504;
                // 0x001090: 0x59A10A8001570910 Ffma
                temp_545 = 0.0 - temp_518;
                temp_546 = fma(temp_244, temp_545, temp_518);
                // 0x001098: 0x59A10A8001570A15 Ffma
                temp_547 = 0.0 - temp_518;
                temp_548 = fma(temp_246, temp_547, temp_518);
                // 0x0010A8: 0x5C68100001873118 Fmul
                temp_549 = temp_223 * temp_542;
                // 0x0010B0: 0x5C68100001473214 Fmul
                temp_550 = temp_225 * temp_543;
                // 0x0010B8: 0x5C68100001973C3C Fmul
                temp_551 = temp_544 * temp_539;
                // 0x0010C8: 0x5C58100001070910 Fadd
                temp_552 = temp_244 + temp_546;
                // 0x0010D0: 0x5C58100001570A15 Fadd
                temp_553 = temp_246 + temp_548;
                // 0x0010D8: 0x5C6017800187FF18 Fmnmx
                temp_554 = max(0.0, temp_549);
                // 0x0010E8: 0x5C6017800147FF14 Fmnmx
                temp_555 = max(0.0, temp_550);
                // 0x0010F0: 0x49A0060400673C0C Ffma
                temp_556 = fma(temp_551, fp_c1.data[1].z, temp_325);
                // 0x0010F8: 0x4C68101406471010 Fmul
                temp_557 = temp_552 * fp_c5.data[25].x;
                // 0x001108: 0x4C68101406471515 Fmul
                temp_558 = temp_553 * fp_c5.data[25].x;
                // 0x001110: 0x5C68100001873418 Fmul
                temp_559 = temp_236 * temp_554;
                // 0x001118: 0x5C68100001473514 Fmul
                temp_560 = temp_238 * temp_555;
                // 0x001128: 0x5C68100001171010 Fmul
                temp_561 = temp_557 * temp_505;
                // 0x001130: 0x5C68100003971515 Fmul
                temp_562 = temp_558 * temp_510;
                // 0x001138: 0x5C68100001871118 Fmul
                temp_563 = temp_505 * temp_559;
                // 0x001148: 0x5C68100001473914 Fmul
                temp_564 = temp_510 * temp_560;
                // 0x001150: 0x5C68100001971010 Fmul
                temp_565 = temp_561 * temp_539;
                // 0x001158: 0x5C68100001971515 Fmul
                temp_566 = temp_562 * temp_539;
                // 0x001168: 0x49A007840077180F Ffma
                temp_567 = fma(temp_563, fp_c1.data[1].w, temp_326);
                // 0x001170: 0x49A0098400771413 Ffma
                temp_568 = fma(temp_564, fp_c1.data[1].w, temp_327);
                // 0x001178: 0x49A006840067100D Ffma
                temp_569 = fma(temp_565, fp_c1.data[1].z, temp_328);
                // 0x001188: 0x49A005840067150B Ffma
                temp_570 = fma(temp_566, fp_c1.data[1].z, temp_329);
                // 0x001190: 0xF0F800000007000F Sync
                temp_442 = temp_538;
                temp_443 = temp_556;
                temp_444 = temp_567;
                temp_445 = temp_568;
                temp_446 = temp_569;
                temp_447 = temp_570;
            }
            // 0x001198: 0x1C00000000173838 Iadd32i
            temp_571 = temp_336 + 1;
            // 0x0011A8: 0x5B6C038003673807 Isetp
            temp_337 = uint(temp_571) >= floatBitsToUint(temp_219);
            // 0x0011B0: 0xE2400FFF9A88000F Bra
            temp_336 = temp_571;
            temp_324 = temp_442;
            temp_325 = temp_443;
            temp_326 = temp_444;
            temp_327 = temp_445;
            temp_328 = temp_446;
            temp_329 = temp_447;
            temp_330 = temp_446;
            temp_331 = temp_443;
            temp_332 = temp_447;
            temp_333 = temp_442;
            temp_334 = temp_444;
            temp_335 = temp_445;
        }
        while (!temp_337);
        // 0x0011B8: 0xF0F800000007000F Sync
    }
    // 0x0011C8: 0x4C58101405472929 Fadd
    temp_572 = temp_72 + fp_c5.data[21].x;
    // 0x0011D0: 0xE003FF87CFF7FF19 Ipa
    // 0x0011D8: 0x4C58101405570110 Fadd
    temp_573 = temp_71 + fp_c5.data[21].y;
    // 0x0011E8: 0xEF4410000087FF3C Ldl
    temp_574 = uintBitsToFloat(local_memory[2]);
    // 0x0011F0: 0x5C68100002972911 Fmul
    temp_575 = temp_572 * temp_572;
    // 0x0011F8: 0xEF4410000047FF3B Ldl
    temp_576 = uintBitsToFloat(local_memory[1]);
    // 0x001208: 0x4C59101405672A2A Fadd
    temp_577 = 0.0 - temp_70;
    temp_578 = temp_577 + fp_c5.data[21].z;
    // 0x001210: 0xEF4410000007FF39 Ldl
    temp_579 = uintBitsToFloat(local_memory[0]);
    // 0x001218: 0x38681040E007032F Fmul
    temp_580 = temp_158 * 7.0;
    // 0x001228: 0x5C62578001673714 Fmnmx
    temp_581 = abs(temp_167);
    temp_582 = abs(temp_314);
    temp_583 = max(temp_581, temp_582);
    // 0x001230: 0x4C98079C02070033 Mov
    // 0x001238: 0x59A0088001071011 Ffma
    temp_584 = fma(temp_573, temp_573, temp_575);
    // 0x001248: 0x5C60578001471718 Fmnmx
    temp_585 = abs(temp_287);
    temp_586 = max(temp_585, temp_583);
    // 0x001250: 0x5080000000471818 Mufu
    temp_587 = 1.0 / temp_586;
    // 0x001258: 0x59A0088002A72A11 Ffma
    temp_588 = fma(temp_578, temp_578, temp_584);
    // 0x001268: 0x508000000057112B Mufu
    temp_589 = inversesqrt(temp_588);
    // 0x001270: 0x5C68100001873715 Fmul
    temp_590 = temp_167 * temp_587;
    // 0x001278: 0x5C68100001871616 Fmul
    temp_591 = temp_314 * temp_587;
    // 0x001288: 0x5C69100001871717 Fmul
    temp_592 = 0.0 - temp_587;
    temp_593 = temp_287 * temp_592;
    // 0x001290: 0x5C68100002B72929 Fmul
    temp_594 = temp_572 * temp_589;
    // 0x001298: 0x5C68100002B71012 Fmul
    temp_595 = temp_573 * temp_589;
    // 0x0012A8: 0x5C68100002B72A2B Fmul
    temp_596 = temp_578 * temp_589;
    // 0x0012B0: 0x508000000047192A Mufu
    // 0x0012B8: 0x5C62578001272910 Fmnmx
    temp_597 = abs(temp_594);
    temp_598 = abs(temp_595);
    temp_599 = max(temp_597, temp_598);
    // 0x0012C8: 0xE043FF9102A7FF2C Ipa
    temp_600 = in_attr9.x;
    // 0x0012D0: 0x5C60578001072B14 Fmnmx
    temp_601 = abs(temp_596);
    temp_602 = max(temp_601, temp_599);
    // 0x0012D8: 0xE043FF9142A7FF2D Ipa
    temp_603 = in_attr9.y;
    // 0x0012E8: 0x010410676C97F030 Mov32i
    // 0x0012F0: 0xE043FF9182A7FF2E Ipa
    temp_604 = in_attr9.z;
    // 0x0012F8: 0x49A00F980A170D1F Ffma
    temp_605 = fma(temp_330, fp_c6.data[40].y, temp_322);
    // 0x001308: 0x5080000000471414 Mufu
    temp_606 = 1.0 / temp_602;
    // 0x001310: 0x5C68100001471211 Fmul
    temp_607 = temp_595 * temp_606;
    // 0x001318: 0x5C68100001472910 Fmul
    temp_608 = temp_594 * temp_606;
    // 0x001328: 0x5C68100001472B12 Fmul
    temp_609 = temp_596 * temp_606;
    // 0x001330: 0x3868104080070329 Fmul
    temp_610 = temp_158 * 4.0;
    // 0x001338: 0xC0BA0163EFF71018 Tex
    temp_611 = textureLod(fp_t_tcb_16, vec3(temp_608, temp_607, temp_609), 0.0).xyz;
    temp_612 = temp_611.x;
    temp_613 = temp_611.y;
    temp_614 = temp_611.z;
    // 0x001348: 0x010000000017F014 Mov32i
    // 0x001350: 0x5C98078001270028 Mov
    // 0x001358: 0xD9A2018282871010 Texs
    temp_615 = textureLod(fp_t_tcb_18, vec3(temp_608, temp_607, temp_609), temp_610).xyz;
    temp_616 = temp_615.x;
    temp_617 = temp_615.y;
    temp_618 = temp_615.z;
    // 0x001368: 0xC1BA0143F2F71414 Tex
    temp_619 = textureLod(fp_t_tcb_14, vec4(temp_590, temp_591, temp_593, float(1)), temp_580).xyz;
    temp_620 = temp_619.x;
    temp_621 = temp_619.y;
    temp_622 = temp_619.z;
    // 0x001370: 0xDEBA0000C3372C2C TexB
    temp_623 = texture(fp_t_cb7_20, vec3(temp_600, temp_603, temp_604)).x;
    // 0x001378: 0x3859103F80070303 Fadd
    temp_624 = 0.0 - temp_158;
    temp_625 = temp_624 + 1.0;
    // 0x001388: 0x3859103F8007022B Fadd
    temp_626 = 0.0 - temp_148;
    temp_627 = temp_626 + 1.0;
    // 0x001390: 0x0103E2CD9E87F00D Mov32i
    // 0x001398: 0x49A00F180A170C1E Ffma
    temp_628 = fma(temp_331, fp_c6.data[40].y, temp_321);
    // 0x0013A8: 0x4C98079408270034 Mov
    // 0x0013B0: 0x4C68101808772323 Fmul
    temp_629 = temp_91 * fp_c6.data[33].w;
    // 0x0013B8: 0x5C68100000370303 Fmul
    temp_630 = temp_625 * temp_625;
    // 0x0013C8: 0x4C68101809072B0C Fmul
    temp_631 = temp_627 * fp_c6.data[36].x;
    // 0x0013D0: 0x5080000000372B2B Mufu
    temp_632 = log2(temp_627);
    // 0x0013D8: 0x1E23E468DB970229 Fmul32i
    temp_633 = temp_148 * 0.193900004;
    // 0x0013E8: 0x5080400000370C0C Mufu
    temp_634 = abs(temp_631);
    temp_635 = log2(temp_634);
    // 0x0013F0: 0x4C68101406473434 Fmul
    temp_636 = fp_c5.data[32].z * fp_c5.data[25].x;
    // 0x0013F8: 0x5C68100000370312 Fmul
    temp_637 = temp_630 * temp_630;
    // 0x001408: 0x49A0180400D70203 Ffma
    temp_638 = fma(temp_148, fp_c1.data[3].y, 8.40400028);
    // 0x001410: 0x49A0148400871229 Ffma
    temp_639 = fma(temp_637, fp_c1.data[2].x, temp_633);
    // 0x001418: 0x51A0018400E70217 Ffma
    temp_640 = fma(temp_148, temp_638, fp_c1.data[3].z);
    // 0x001428: 0x49A2068400C7120D Ffma
    temp_641 = fma(temp_637, fp_c1.data[3].x, -0.168799996);
    // 0x001430: 0x0103F0000007F02F Mov32i
    // 0x001438: 0x0104066978D7F02D Mov32i
    // 0x001448: 0x4C68101809170C0C Fmul
    temp_642 = temp_635 * fp_c6.data[36].y;
    // 0x001450: 0x088BF05D63972929 Fadd32i
    temp_643 = temp_639 + -0.522800028;
    // 0x001458: 0x51A00B8400F70217 Ffma
    temp_644 = fma(temp_148, temp_640, fp_c1.data[3].w);
    // 0x001468: 0x5C68100000D7120D Fmul
    temp_645 = temp_637 * temp_641;
    // 0x001470: 0x32A017BF00070101 Ffma
    temp_646 = fma(temp_71, 0.5, 0.5);
    // 0x001478: 0x49A013180A170B03 Ffma
    temp_647 = fma(temp_332, fp_c6.data[40].y, temp_323);
    // 0x001488: 0x4C9807980087000B Mov
    // 0x001490: 0x5C6810000297022F Fmul
    temp_648 = temp_148 * temp_643;
    // 0x001498: 0x4C98079800A70029 Mov
    // 0x0014A8: 0x4C9807980B47002E Mov
    // 0x0014B0: 0x5C60138000D71702 Fmnmx
    temp_649 = min(temp_644, temp_645);
    // 0x0014B8: 0x4C98079800970017 Mov
    // 0x0014C8: 0x49A216840097120D Ffma
    temp_650 = fma(temp_637, fp_c1.data[2].y, -3.60299993);
    // 0x0014D0: 0x4C59101800470B0B Fadd
    temp_651 = 0.0 - fp_c6.data[2].x;
    temp_652 = temp_651 + fp_c6.data[1].x;
    // 0x0014D8: 0x5C90008000C70026 Rro
    // 0x0014E8: 0xF0F0000034770000 Depbar
    // 0x0014F0: 0x51A217180B472020 Ffma
    temp_653 = 0.0 - fp_c6.data[45].x;
    temp_654 = fma(temp_93, fp_c6.data[45].x, temp_653);
    // 0x0014F8: 0x5084000000272626 Mufu
    temp_655 = exp2(temp_642);
    temp_656 = clamp(temp_655, 0.0, 1.0);
    // 0x001508: 0x4C5910180057170C Fadd
    temp_657 = 0.0 - fp_c6.data[2].y;
    temp_658 = temp_657 + fp_c6.data[1].y;
    // 0x001510: 0x4C59101800672917 Fadd
    temp_659 = 0.0 - fp_c6.data[2].z;
    temp_660 = temp_659 + fp_c6.data[1].z;
    // 0x001518: 0x51A217180B472121 Ffma
    temp_661 = 0.0 - fp_c6.data[45].x;
    temp_662 = fma(temp_94, fp_c6.data[45].x, temp_661);
    // 0x001528: 0x51A217180B470000 Ffma
    temp_663 = 0.0 - fp_c6.data[45].x;
    temp_664 = fma(temp_95, fp_c6.data[45].x, temp_663);
    // 0x001530: 0x51A0068400A7122D Ffma
    temp_665 = fma(temp_637, temp_650, fp_c1.data[2].z);
    // 0x001538: 0x4C9807980947002E Mov
    // 0x001548: 0x51A005980087010B Ffma
    temp_666 = fma(temp_646, temp_652, fp_c6.data[2].x);
    // 0x001550: 0x51A006180097010C Ffma
    temp_667 = fma(temp_646, temp_658, fp_c6.data[2].y);
    // 0x001558: 0x51A00B9800A7010D Ffma
    temp_668 = fma(temp_646, temp_660, fp_c6.data[2].z);
    // 0x001568: 0x4C68101808972B01 Fmul
    temp_669 = temp_632 * fp_c6.data[34].y;
    // 0x001570: 0x59A0178002D7122D Ffma
    temp_670 = fma(temp_637, temp_665, temp_648);
    // 0x001578: 0xE04BFF9042A7FF12 Ipa
    temp_671 = in_attr8.y;
    temp_672 = clamp(temp_671, 0.0, 1.0);
    // 0x001588: 0x386C104248070917 Fmul
    temp_673 = temp_244 * 50.0;
    temp_674 = clamp(temp_673, 0.0, 1.0);
    // 0x001590: 0x5C5C30000FF70230 Fadd
    temp_675 = temp_649 + -0.0;
    temp_676 = clamp(temp_675, 0.0, 1.0);
    // 0x001598: 0x4C58101408172E29 Fadd
    temp_677 = fp_c6.data[37].x + fp_c5.data[32].y;
    // 0x0015A8: 0x5C9000800017002E Rro
    // 0x0015B0: 0x4C5C100400B72D02 Fadd
    temp_678 = temp_670 + fp_c1.data[2].w;
    temp_679 = clamp(temp_678, 0.0, 1.0);
    // 0x0015B8: 0x5C6810000307172B Fmul
    temp_680 = temp_674 * temp_676;
    // 0x0015C8: 0x5084000000272E17 Mufu
    temp_681 = exp2(temp_669);
    temp_682 = clamp(temp_681, 0.0, 1.0);
    // 0x0015D0: 0x5C68100002972626 Fmul
    temp_683 = temp_656 * temp_677;
    // 0x0015D8: 0x5C58300003070230 Fadd
    temp_684 = 0.0 - temp_676;
    temp_685 = temp_679 + temp_684;
    // 0x0015E8: 0x4C68101808C72629 Fmul
    temp_686 = temp_683 * fp_c6.data[35].x;
    // 0x0015F0: 0x4C68101808D7262D Fmul
    temp_687 = temp_683 * fp_c6.data[35].y;
    // 0x0015F8: 0x4C68101808E72626 Fmul
    temp_688 = temp_683 * fp_c6.data[35].z;
    // 0x001608: 0x59A0158003070808 Ffma
    temp_689 = fma(temp_243, temp_685, temp_680);
    // 0x001610: 0x59A0158003070909 Ffma
    temp_690 = fma(temp_244, temp_685, temp_680);
    // 0x001618: 0x59A0158003070A0A Ffma
    temp_691 = fma(temp_246, temp_685, temp_680);
    // 0x001628: 0x59A00F0003472901 Ffma
    temp_692 = fma(temp_686, temp_636, temp_628);
    // 0x001630: 0x4C9807980867001E Mov
    // 0x001638: 0x4C68101808871717 Fmul
    temp_693 = temp_682 * fp_c6.data[34].x;
    // 0x001648: 0x59A00F8003472D02 Ffma
    temp_694 = fma(temp_687, temp_636, temp_605);
    // 0x001650: 0x010404000007F01F Mov32i
    // 0x001658: 0x49A1149408272929 Ffma
    temp_695 = 0.0 - fp_c5.data[32].z;
    temp_696 = fma(temp_686, temp_695, temp_686);
    // 0x001668: 0x59A0018003472603 Ffma
    temp_697 = fma(temp_688, temp_636, temp_647);
    // 0x001670: 0x49A1169408272D2D Ffma
    temp_698 = 0.0 - fp_c5.data[32].z;
    temp_699 = fma(temp_687, temp_698, temp_687);
    // 0x001678: 0x51A00F180867171E Ffma
    temp_700 = fma(temp_693, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x001688: 0x49A1131408272626 Ffma
    temp_701 = 0.0 - fp_c5.data[32].z;
    temp_702 = fma(temp_688, temp_701, temp_688);
    // 0x001690: 0x4C68101406470808 Fmul
    temp_703 = temp_689 * fp_c5.data[25].x;
    // 0x001698: 0x4C68101406470909 Fmul
    temp_704 = temp_690 * fp_c5.data[25].x;
    // 0x0016A8: 0x4C68101406470A0A Fmul
    temp_705 = temp_691 * fp_c5.data[25].x;
    // 0x0016B0: 0xF0F0000034470000 Depbar
    // 0x0016B8: 0x49A01E180A170E0E Ffma
    temp_706 = fma(temp_333, fp_c6.data[40].y, temp_574);
    // 0x0016C8: 0x49A01D980A170F0F Ffma
    temp_707 = fma(temp_334, fp_c6.data[40].y, temp_576);
    // 0x0016D0: 0x5C58100000E7290E Fadd
    temp_708 = temp_696 + temp_706;
    // 0x0016D8: 0x49A01C980A171313 Ffma
    temp_709 = fma(temp_335, fp_c6.data[40].y, temp_579);
    // 0x0016E8: 0x5C58100000F72D0F Fadd
    temp_710 = temp_699 + temp_707;
    // 0x0016F0: 0x5C58100001372613 Fadd
    temp_711 = temp_702 + temp_709;
    // 0x0016F8: 0xF0F0000034370000 Depbar
    // 0x001708: 0x4C68101407871818 Fmul
    temp_712 = temp_612 * fp_c5.data[30].x;
    // 0x001710: 0x4C68101407871919 Fmul
    temp_713 = temp_613 * fp_c5.data[30].x;
    // 0x001718: 0x4C68101407871A1A Fmul
    temp_714 = temp_614 * fp_c5.data[30].x;
    // 0x001728: 0x49A00C0400770B17 Ffma
    temp_715 = fma(temp_666, fp_c1.data[1].w, temp_712);
    // 0x001730: 0x33A00FC00007120B Ffma
    temp_716 = fma(temp_672, -2.0, 3.0);
    // 0x001738: 0x5C68100001271212 Fmul
    temp_717 = temp_672 * temp_672;
    // 0x001748: 0x49A00C8400770C0C Ffma
    temp_718 = fma(temp_667, fp_c1.data[1].w, temp_713);
    // 0x001750: 0x49A00D0400770D18 Ffma
    temp_719 = fma(temp_668, fp_c1.data[1].w, temp_714);
    // 0x001758: 0xF0F0000034170000 Depbar
    // 0x001768: 0xE043FF9002A7FF0D Ipa
    temp_720 = in_attr8.x;
    // 0x001770: 0x4C68101407872828 Fmul
    temp_721 = temp_618 * fp_c5.data[30].x;
    // 0x001778: 0x59A20B8001E72424 Ffma
    temp_722 = 0.0 - temp_715;
    temp_723 = fma(temp_88, temp_700, temp_722);
    // 0x001788: 0x5C68100001270B0B Fmul
    temp_724 = temp_716 * temp_717;
    // 0x001790: 0x59A2060001E72525 Ffma
    temp_725 = 0.0 - temp_718;
    temp_726 = fma(temp_89, temp_700, temp_725);
    // 0x001798: 0x4C68101407871012 Fmul
    temp_727 = temp_616 * fp_c5.data[30].x;
    // 0x0017A8: 0x59A20C0001E7221E Ffma
    temp_728 = 0.0 - temp_719;
    temp_729 = fma(temp_90, temp_700, temp_728);
    // 0x0017B0: 0x59A00B8002372424 Ffma
    temp_730 = fma(temp_723, temp_629, temp_715);
    // 0x0017B8: 0x4C68101407871110 Fmul
    temp_731 = temp_617 * fp_c5.data[30].x;
    // 0x0017C8: 0x49A0141808571628 Ffma
    temp_732 = fma(temp_622, fp_c6.data[33].y, temp_721);
    // 0x0017D0: 0x59A0060002372525 Ffma
    temp_733 = fma(temp_726, temp_629, temp_718);
    // 0x0017D8: 0x49A0091808571412 Ffma
    temp_734 = fma(temp_620, fp_c6.data[33].y, temp_727);
    // 0x0017E8: 0x59A00C0002371E1E Ffma
    temp_735 = fma(temp_729, temp_629, temp_719);
    // 0x0017F0: 0x5C58100000E7240E Fadd
    temp_736 = temp_730 + temp_708;
    // 0x0017F8: 0x49A0081808571510 Ffma
    temp_737 = fma(temp_621, fp_c6.data[33].y, temp_731);
    // 0x001808: 0x59A0018002870A0A Ffma
    temp_738 = fma(temp_705, temp_732, temp_697);
    // 0x001810: 0x5C58100000F72525 Fadd
    temp_739 = temp_733 + temp_710;
    // 0x001818: 0x59A0008001270808 Ffma
    temp_740 = fma(temp_703, temp_734, temp_692);
    // 0x001828: 0x5C58100001371E1E Fadd
    temp_741 = temp_735 + temp_711;
    // 0x001830: 0x59A1070000E7270E Ffma
    temp_742 = 0.0 - temp_736;
    temp_743 = fma(temp_7, temp_742, temp_736);
    // 0x001838: 0x59A0010001070909 Ffma
    temp_744 = fma(temp_704, temp_737, temp_694);
    // 0x001848: 0x4C98079802870002 Mov
    // 0x001850: 0x59A112800257270C Ffma
    temp_745 = 0.0 - temp_739;
    temp_746 = fma(temp_7, temp_745, temp_739);
    // 0x001858: 0x4C68101803770B0B Fmul
    temp_747 = temp_724 * fp_c6.data[13].w;
    // 0x001868: 0x59A10F0001E72701 Ffma
    temp_748 = 0.0 - temp_741;
    temp_749 = fma(temp_7, temp_748, temp_741);
    // 0x001870: 0x59A0040000E70508 Ffma
    temp_750 = fma(temp_210, temp_743, temp_740);
    // 0x001878: 0x4C9807980297000E Mov
    // 0x001888: 0x51A0011802872020 Ffma
    temp_751 = fma(temp_654, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x001890: 0x59A0048000C70609 Ffma
    temp_752 = fma(temp_211, temp_746, temp_744);
    // 0x001898: 0x49A506980BC72C0D Ffma
    temp_753 = 0.0 - fp_c6.data[47].x;
    temp_754 = fma(temp_623, temp_753, temp_720);
    temp_755 = clamp(temp_754, 0.0, 1.0);
    // 0x0018A8: 0x59A005000017070A Ffma
    temp_756 = fma(temp_212, temp_749, temp_738);
    // 0x0018B0: 0x5080000000370D0D Mufu
    temp_757 = log2(temp_755);
    // 0x0018B8: 0x5C68100000871B1B Fmul
    temp_758 = temp_320 * temp_750;
    // 0x0018C8: 0xE043FF8C82A7FF08 Ipa
    temp_759 = in_attr4.z;
    // 0x0018D0: 0x4C98079802A70001 Mov
    // 0x0018D8: 0x5C68100000971C1C Fmul
    temp_760 = temp_316 * temp_752;
    // 0x0018E8: 0x51A0071802972121 Ffma
    temp_761 = fma(temp_662, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0018F0: 0x49A2059803570B06 Ffma
    temp_762 = 0.0 - temp_747;
    temp_763 = fma(temp_747, fp_c6.data[13].y, temp_762);
    // 0x0018F8: 0x5C68100000A71D1D Fmul
    temp_764 = temp_318 * temp_756;
    // 0x001908: 0x49A00D9406C73E3E Ffma
    temp_765 = fma(temp_190, fp_c5.data[27].x, temp_758);
    // 0x001910: 0x51A0009802A70001 Ffma
    temp_766 = fma(temp_664, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001918: 0x49A00E1406C73A3A Ffma
    temp_767 = fma(temp_191, fp_c5.data[27].x, temp_760);
    // 0x001928: 0x49A00E9406C70404 Ffma
    temp_768 = fma(temp_192, fp_c5.data[27].x, temp_764);
    // 0x001930: 0x5C58300002073E02 Fadd
    temp_769 = 0.0 - temp_751;
    temp_770 = temp_765 + temp_769;
    // 0x001938: 0x4C68101803170D05 Fmul
    temp_771 = temp_757 * fp_c6.data[12].y;
    // 0x001948: 0x5C58300002173A00 Fadd
    temp_772 = 0.0 - temp_761;
    temp_773 = temp_767 + temp_772;
    // 0x001950: 0x49A010180BF70203 Ffma
    temp_774 = fma(temp_770, fp_c6.data[47].w, temp_751);
    // 0x001958: 0x5C58300000170402 Fadd
    temp_775 = 0.0 - temp_766;
    temp_776 = temp_768 + temp_775;
    // 0x001968: 0x49A010980BF70000 Ffma
    temp_777 = fma(temp_773, fp_c6.data[47].w, temp_761);
    // 0x001970: 0x5C90008000570007 Rro
    // 0x001978: 0x49A2059803470B05 Ffma
    temp_778 = 0.0 - temp_747;
    temp_779 = fma(temp_747, fp_c6.data[13].x, temp_778);
    // 0x001988: 0x5080000000270707 Mufu
    temp_780 = exp2(temp_771);
    // 0x001990: 0x5C60178000372003 Fmnmx
    temp_781 = max(temp_751, temp_774);
    // 0x001998: 0x49A000980BF70202 Ffma
    temp_782 = fma(temp_776, fp_c6.data[47].w, temp_766);
    // 0x0019A8: 0x5C60178000072100 Fmnmx
    temp_783 = max(temp_761, temp_777);
    // 0x0019B0: 0x49A2059803670B0B Ffma
    temp_784 = 0.0 - temp_747;
    temp_785 = fma(temp_747, fp_c6.data[13].z, temp_784);
    // 0x0019B8: 0x59A0018000570305 Ffma
    temp_786 = fma(temp_781, temp_779, temp_781);
    // 0x0019C8: 0x5C60178000270102 Fmnmx
    temp_787 = max(temp_766, temp_782);
    // 0x0019D0: 0x59A0000000670001 Ffma
    temp_788 = fma(temp_783, temp_763, temp_783);
    // 0x0019D8: 0x4C58100C03870808 Fadd
    temp_789 = temp_759 + fp_c3.data[14].x;
    // 0x0019E8: 0x5C9807800FF70006 Mov
    // 0x0019F0: 0x4C68101802B70703 Fmul
    temp_790 = temp_780 * fp_c6.data[10].w;
    // 0x0019F8: 0x59A0010000B70202 Ffma
    temp_791 = fma(temp_787, temp_785, temp_787);
    // 0x001A08: 0x5C59100000573E00 Fadd
    temp_792 = 0.0 - temp_765;
    temp_793 = temp_792 + temp_786;
    // 0x001A10: 0x5C59100000173A01 Fadd
    temp_794 = 0.0 - temp_767;
    temp_795 = temp_794 + temp_788;
    // 0x001A18: 0x0103E0000007F005 Mov32i
    // 0x001A28: 0x0103F8000007F007 Mov32i
    // 0x001A30: 0x5C59100000270402 Fadd
    temp_796 = 0.0 - temp_768;
    temp_797 = temp_796 + temp_791;
    // 0x001A38: 0x59A01F0000370000 Ffma
    temp_798 = fma(temp_793, temp_790, temp_765);
    // 0x001A48: 0x59A01D0000370101 Ffma
    temp_799 = fma(temp_795, temp_790, temp_767);
    // 0x001A50: 0x59A0020000370202 Ffma
    temp_800 = fma(temp_797, temp_790, temp_768);
    // 0x001A58: 0x0103F8000007F003 Mov32i
    // 0x001A68: 0x49A37F8C03C70804 Ffma
    temp_801 = 0.0 - fp_c3.data[15].x;
    temp_802 = fma(temp_789, temp_801, -0.0);
    // 0x001A70: 0xE30000000007000F Exit
    out_attr0.x = temp_798;
    out_attr0.y = temp_799;
    out_attr0.z = temp_800;
    out_attr0.w = 1.0;
    out_attr1.x = temp_802;
    out_attr1.y = 0.125;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
