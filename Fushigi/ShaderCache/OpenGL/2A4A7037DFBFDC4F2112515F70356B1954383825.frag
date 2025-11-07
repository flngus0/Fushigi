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
    precise vec4 temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise vec3 temp_91;
    precise float temp_92;
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
    uint temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    precise float temp_206;
    precise float temp_207;
    precise float temp_208;
    int temp_209;
    precise float temp_210;
    precise float temp_211;
    int temp_212;
    uint temp_213;
    uint temp_214;
    int temp_215;
    precise float temp_216;
    precise float temp_217;
    precise float temp_218;
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
    precise float temp_283;
    precise float temp_284;
    precise float temp_285;
    precise float temp_286;
    precise float temp_287;
    precise float temp_288;
    bool temp_289;
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
    precise float temp_336;
    precise float temp_337;
    precise float temp_338;
    int temp_339;
    bool temp_340;
    int temp_341;
    int temp_342;
    int temp_343;
    int temp_344;
    int temp_345;
    uint temp_346;
    uint temp_347;
    int temp_348;
    precise float temp_349;
    precise float temp_350;
    precise float temp_351;
    precise float temp_352;
    int temp_353;
    int temp_354;
    uint temp_355;
    uint temp_356;
    int temp_357;
    precise float temp_358;
    int temp_359;
    uint temp_360;
    int temp_361;
    precise float temp_362;
    int temp_363;
    uint temp_364;
    uint temp_365;
    int temp_366;
    precise float temp_367;
    int temp_368;
    uint temp_369;
    int temp_370;
    precise float temp_371;
    int temp_372;
    uint temp_373;
    uint temp_374;
    int temp_375;
    precise float temp_376;
    int temp_377;
    uint temp_378;
    int temp_379;
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
    int temp_390;
    uint temp_391;
    uint temp_392;
    int temp_393;
    precise float temp_394;
    int temp_395;
    uint temp_396;
    int temp_397;
    precise float temp_398;
    precise float temp_399;
    precise float temp_400;
    precise float temp_401;
    precise float temp_402;
    precise float temp_403;
    precise float temp_404;
    precise float temp_405;
    precise float temp_406;
    precise float temp_407;
    int temp_408;
    uint temp_409;
    uint temp_410;
    int temp_411;
    precise float temp_412;
    precise float temp_413;
    precise float temp_414;
    int temp_415;
    uint temp_416;
    uint temp_417;
    int temp_418;
    precise float temp_419;
    int temp_420;
    uint temp_421;
    int temp_422;
    precise float temp_423;
    precise float temp_424;
    precise float temp_425;
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
    precise float temp_438;
    precise float temp_439;
    precise float temp_440;
    precise float temp_441;
    uint temp_442;
    int temp_443;
    bool temp_444;
    uint temp_445;
    precise float temp_446;
    precise float temp_447;
    precise float temp_448;
    precise float temp_449;
    precise float temp_450;
    precise float temp_451;
    precise float temp_452;
    uint temp_453;
    precise float temp_454;
    bool temp_455;
    precise float temp_456;
    precise float temp_457;
    precise float temp_458;
    int temp_459;
    uint temp_460;
    uint temp_461;
    int temp_462;
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
    precise float temp_479;
    precise float temp_480;
    precise float temp_481;
    precise float temp_482;
    precise float temp_483;
    precise float temp_484;
    precise float temp_485;
    precise float temp_486;
    precise float temp_487;
    precise float temp_488;
    precise float temp_489;
    precise float temp_490;
    precise float temp_491;
    precise float temp_492;
    precise float temp_493;
    precise float temp_494;
    uint temp_495;
    uint temp_496;
    int temp_497;
    precise float temp_498;
    int temp_499;
    uint temp_500;
    int temp_501;
    precise float temp_502;
    precise float temp_503;
    precise float temp_504;
    int temp_505;
    uint temp_506;
    uint temp_507;
    int temp_508;
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
    precise float temp_571;
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
    precise float temp_615;
    precise vec3 temp_616;
    precise float temp_617;
    precise float temp_618;
    precise float temp_619;
    precise vec3 temp_620;
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
    precise float temp_803;
    // 0x000008: 0x4C9807940387001D Mov
    // 0x000010: 0xE003FF87CFF7FF10 Ipa
    // 0x000018: 0x5080000000471010 Mufu
    // 0x000028: 0xE043FF8E0107FF0C Ipa
    temp_0 = in_attr6.x;
    // 0x000030: 0xE043FF8E4107FF0D Ipa
    temp_1 = in_attr6.y;
    // 0x000038: 0xD830026FF0D70C00 Texs
    temp_2 = texture(fp_t_tcb_26, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000048: 0xD824036040D70C2A Texs
    temp_5 = texture(fp_t_tcb_36, vec2(temp_0, temp_1)).xyw;
    temp_6 = temp_5.x;
    temp_7 = temp_5.y;
    temp_8 = temp_5.z;
    // 0x000050: 0xD822024030D70C0E Texs
    temp_9 = texture(fp_t_tcb_24, vec2(temp_0, temp_1)).xyz;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    temp_12 = temp_9.z;
    // 0x000058: 0xE043FF8A0107FF02 Ipa
    temp_13 = in_attr2.x;
    // 0x000068: 0xE043FF8A4107FF05 Ipa
    temp_14 = in_attr2.y;
    // 0x000070: 0xE043FF890107FF08 Ipa
    temp_15 = in_attr1.x;
    // 0x000078: 0xE043FF8A8107FF06 Ipa
    temp_16 = in_attr2.z;
    // 0x000088: 0xE043FF894107FF09 Ipa
    temp_17 = in_attr1.y;
    // 0x000090: 0xE043FF880107FF11 Ipa
    temp_18 = in_attr0.x;
    // 0x000098: 0xE043FF898107FF0A Ipa
    temp_19 = in_attr1.z;
    // 0x0000A8: 0xE043FF884107FF13 Ipa
    temp_20 = in_attr0.y;
    // 0x0000B0: 0xE043FF8B0107FF2C Ipa
    temp_21 = in_attr3.x;
    // 0x0000B8: 0xE043FF888107FF0D Ipa
    temp_22 = in_attr0.z;
    // 0x0000C8: 0x5C68100000270207 Fmul
    temp_23 = temp_13 * temp_13;
    // 0x0000D0: 0x5C6810000087080B Fmul
    temp_24 = temp_15 * temp_15;
    // 0x0000D8: 0x5C68100001171114 Fmul
    temp_25 = temp_18 * temp_18;
    // 0x0000E8: 0x59A0038000570507 Ffma
    temp_26 = fma(temp_14, temp_14, temp_23);
    // 0x0000F0: 0x59A005800097090B Ffma
    temp_27 = fma(temp_17, temp_17, temp_24);
    // 0x0000F8: 0x59A00A0001371314 Ffma
    temp_28 = fma(temp_20, temp_20, temp_25);
    // 0x000108: 0x59A0038000670607 Ffma
    temp_29 = fma(temp_16, temp_16, temp_26);
    // 0x000110: 0x5080000000570707 Mufu
    temp_30 = inversesqrt(temp_29);
    // 0x000118: 0x59A0058000A70A0B Ffma
    temp_31 = fma(temp_19, temp_19, temp_27);
    // 0x000128: 0x5080000000570B0B Mufu
    temp_32 = inversesqrt(temp_31);
    // 0x000130: 0x59A00A0000D70D14 Ffma
    temp_33 = fma(temp_22, temp_22, temp_28);
    // 0x000138: 0x5080000000571414 Mufu
    temp_34 = inversesqrt(temp_33);
    // 0x000148: 0x5C68100000770512 Fmul
    temp_35 = temp_14 * temp_30;
    // 0x000150: 0x5C6810000077020C Fmul
    temp_36 = temp_13 * temp_30;
    // 0x000158: 0x5C68100000770606 Fmul
    temp_37 = temp_16 * temp_30;
    // 0x000168: 0x5C68100000B70802 Fmul
    temp_38 = temp_15 * temp_32;
    // 0x000170: 0x5C68100000B70909 Fmul
    temp_39 = temp_17 * temp_32;
    // 0x000178: 0x5C68100000B70A0A Fmul
    temp_40 = temp_19 * temp_32;
    // 0x000188: 0x5C68100001471111 Fmul
    temp_41 = temp_18 * temp_34;
    // 0x000190: 0x5C68100001471313 Fmul
    temp_42 = temp_20 * temp_34;
    // 0x000198: 0x5C68100001470D07 Fmul
    temp_43 = temp_22 * temp_34;
    // 0x0001A8: 0xF0F0000034270000 Depbar
    // 0x0001B0: 0x5C68100000170105 Fmul
    temp_44 = temp_4 * temp_4;
    // 0x0001B8: 0x5C68100000171212 Fmul
    temp_45 = temp_35 * temp_4;
    // 0x0001C8: 0x59A0028000070005 Ffma
    temp_46 = fma(temp_3, temp_3, temp_44);
    // 0x0001D0: 0x59A0090000070909 Ffma
    temp_47 = fma(temp_39, temp_3, temp_45);
    // 0x0001D8: 0x385D103F80070508 Fadd
    temp_48 = 0.0 - temp_46;
    temp_49 = temp_48 + 1.0;
    temp_50 = clamp(temp_49, 0.0, 1.0);
    // 0x0001E8: 0x5C68100000170C05 Fmul
    temp_51 = temp_36 * temp_4;
    // 0x0001F0: 0x5080000000870808 Mufu
    temp_52 = sqrt(temp_50);
    // 0x0001F8: 0x5C68100000170601 Fmul
    temp_53 = temp_37 * temp_4;
    // 0x000208: 0x59A0028000070202 Ffma
    temp_54 = fma(temp_38, temp_3, temp_51);
    // 0x000210: 0x59A0008000070A01 Ffma
    temp_55 = fma(temp_40, temp_3, temp_53);
    // 0x000218: 0xE003FF874FF7FF0A Ipa
    temp_56 = gl_FragCoord.y;
    temp_57 = support_buffer.render_scale[0];
    temp_58 = temp_56 / temp_57;
    // 0x000228: 0x59A0010000871111 Ffma
    temp_59 = fma(temp_41, temp_52, temp_54);
    // 0x000230: 0x59A0048000871309 Ffma
    temp_60 = fma(temp_42, temp_52, temp_47);
    // 0x000238: 0x59A0008000870701 Ffma
    temp_61 = fma(temp_43, temp_52, temp_55);
    // 0x000248: 0xE003FF870FF7FF08 Ipa
    temp_62 = gl_FragCoord.x;
    temp_63 = support_buffer.render_scale[0];
    temp_64 = temp_62 / temp_63;
    // 0x000250: 0x5C68100001171100 Fmul
    temp_65 = temp_59 * temp_59;
    // 0x000258: 0x59A0000000970900 Ffma
    temp_66 = fma(temp_60, temp_60, temp_65);
    // 0x000268: 0x59A0000000170100 Ffma
    temp_67 = fma(temp_61, temp_61, temp_66);
    // 0x000270: 0x5080000000570000 Mufu
    temp_68 = inversesqrt(temp_67);
    // 0x000278: 0x5C6810000007012E Fmul
    temp_69 = temp_61 * temp_68;
    // 0x000288: 0x5C68100000070902 Fmul
    temp_70 = temp_60 * temp_68;
    // 0x000290: 0x5C6810000007112D Fmul
    temp_71 = temp_59 * temp_68;
    // 0x000298: 0x4C68100C00672E05 Fmul
    temp_72 = temp_69 * fp_c3.data[1].z;
    // 0x0002A8: 0x4C68100C00272E01 Fmul
    temp_73 = temp_69 * fp_c3.data[0].z;
    // 0x0002B0: 0x49A0028C00570207 Ffma
    temp_74 = fma(temp_70, fp_c3.data[1].y, temp_72);
    // 0x0002B8: 0x49A0008C00170206 Ffma
    temp_75 = fma(temp_70, fp_c3.data[0].y, temp_73);
    // 0x0002C8: 0x4C68100C04A70805 Fmul
    temp_76 = temp_64 * fp_c3.data[18].z;
    // 0x0002D0: 0x49A0038C00472D07 Ffma
    temp_77 = fma(temp_71, fp_c3.data[1].x, temp_74);
    // 0x0002D8: 0x49A0030C00072D00 Ffma
    temp_78 = fma(temp_71, fp_c3.data[0].x, temp_75);
    // 0x0002E8: 0x4C68100C04B70A06 Fmul
    temp_79 = temp_58 * fp_c3.data[18].w;
    // 0x0002F0: 0x4C69100C03E70707 Fmul
    temp_80 = 0.0 - fp_c3.data[15].z;
    temp_81 = temp_77 * temp_80;
    // 0x0002F8: 0x4C68101808B70000 Fmul
    temp_82 = temp_78 * fp_c6.data[34].w;
    // 0x000308: 0x4C68101808B70707 Fmul
    temp_83 = temp_81 * fp_c6.data[34].w;
    // 0x000310: 0x49A0028400370026 Ffma
    temp_84 = fma(temp_82, fp_c1.data[0].w, temp_76);
    // 0x000318: 0x49A0030400370727 Ffma
    temp_85 = fma(temp_83, fp_c1.data[0].w, temp_79);
    // 0x000328: 0xD832022262772628 Texs
    temp_86 = texture(fp_t_tcb_22, vec2(temp_84, temp_85)).xyzw;
    temp_87 = temp_86.x;
    temp_88 = temp_86.y;
    temp_89 = temp_86.z;
    temp_90 = temp_86.w;
    // 0x000330: 0xD822020010670524 Texs
    temp_91 = texture(fp_t_tcb_20, vec2(temp_76, temp_79)).xyz;
    temp_92 = temp_91.x;
    temp_93 = temp_91.y;
    temp_94 = temp_91.z;
    // 0x000338: 0xE043FF8B4107FF1A Ipa
    temp_95 = in_attr3.y;
    // 0x000348: 0xE043FF8B8107FF12 Ipa
    temp_96 = in_attr3.z;
    // 0x000350: 0x5C68100002C72C00 Fmul
    temp_97 = temp_21 * temp_21;
    // 0x000358: 0xE2900000E6000000 Ssy
    // 0x000368: 0x01040DF760C7F013 Mov32i
    // 0x000370: 0xF0F0000034270000 Depbar
    // 0x000378: 0x4C5C101406372A2A Fadd
    temp_98 = temp_6 + fp_c5.data[24].w;
    temp_99 = clamp(temp_98, 0.0, 1.0);
    // 0x000388: 0x4C9807940397001C Mov
    // 0x000390: 0x4C59101403471D1D Fadd
    temp_100 = 0.0 - fp_c5.data[14].x;
    temp_101 = temp_100 + fp_c5.data[13].x;
    // 0x000398: 0x4C68101403D70F3A Fmul
    temp_102 = temp_11 * fp_c5.data[15].y;
    // 0x0003A8: 0x4C68101403E70339 Fmul
    temp_103 = temp_12 * fp_c5.data[15].z;
    // 0x0003B0: 0x4C68101403C70E3B Fmul
    temp_104 = temp_10 * fp_c5.data[15].x;
    // 0x0003B8: 0x4C6810180A072A2A Fmul
    temp_105 = temp_99 * fp_c6.data[40].x;
    // 0x0003C8: 0x4C59101403571C1C Fadd
    temp_106 = 0.0 - fp_c5.data[14].y;
    temp_107 = temp_106 + fp_c5.data[13].y;
    // 0x0003D0: 0x3868104110070606 Fmul
    temp_108 = temp_79 * 9.0;
    // 0x0003D8: 0x3858103F80073A37 Fadd
    temp_109 = temp_102 + 1.0;
    // 0x0003E8: 0x5CA8148000670A06 F2f
    temp_110 = floor(temp_108);
    // 0x0003F0: 0x3858103F80073936 Fadd
    temp_111 = temp_103 + 1.0;
    // 0x0003F8: 0x5080000000473737 Mufu
    temp_112 = 1.0 / temp_109;
    // 0x000408: 0x386013BF80072A1E Fmnmx
    temp_113 = min(temp_105, 1.0);
    // 0x000410: 0x5080000000473636 Mufu
    temp_114 = 1.0 / temp_111;
    // 0x000418: 0x3858103F80073B38 Fadd
    temp_115 = temp_104 + 1.0;
    // 0x000428: 0x0103F8000007F033 Mov32i
    // 0x000430: 0x5080000000473838 Mufu
    temp_116 = 1.0 / temp_115;
    // 0x000438: 0x4C68101402D70F0F Fmul
    temp_117 = temp_11 * fp_c5.data[11].y;
    // 0x000448: 0x4C60178400071E1E Fmnmx
    temp_118 = max(temp_113, fp_c1.data[0].x);
    // 0x000450: 0x49A0198400473B35 Ffma
    temp_119 = fma(temp_104, fp_c1.data[1].x, 1.0);
    // 0x000458: 0x49A0198400473A34 Ffma
    temp_120 = fma(temp_102, fp_c1.data[1].x, 1.0);
    // 0x000468: 0x5080000000473535 Mufu
    temp_121 = 1.0 / temp_119;
    // 0x000470: 0x59A0000001A71A00 Ffma
    temp_122 = fma(temp_95, temp_95, temp_97);
    // 0x000478: 0x5080000000473434 Mufu
    temp_123 = 1.0 / temp_120;
    // 0x000488: 0x51A40F0400071E40 Ffma
    temp_124 = fma(temp_118, temp_118, fp_c1.data[0].x);
    temp_125 = clamp(temp_124, 0.0, 1.0);
    // 0x000490: 0x59A0000001271200 Ffma
    temp_126 = fma(temp_96, temp_96, temp_122);
    // 0x000498: 0x5C6810000407403F Fmul
    temp_127 = temp_125 * temp_125;
    // 0x0004A8: 0x5080000000570007 Mufu
    temp_128 = inversesqrt(temp_126);
    // 0x0004B0: 0x5C69100000772C2C Fmul
    temp_129 = 0.0 - temp_128;
    temp_130 = temp_21 * temp_129;
    // 0x0004B8: 0x5C69100000771A1A Fmul
    temp_131 = 0.0 - temp_128;
    temp_132 = temp_95 * temp_131;
    // 0x0004C8: 0x5C69100000771212 Fmul
    temp_133 = 0.0 - temp_128;
    temp_134 = temp_96 * temp_133;
    // 0x0004D0: 0x4C58301805C72C08 Fadd
    temp_135 = 0.0 - fp_c6.data[23].x;
    temp_136 = temp_130 + temp_135;
    // 0x0004D8: 0x4C58301805D71A07 Fadd
    temp_137 = 0.0 - fp_c6.data[23].y;
    temp_138 = temp_132 + temp_137;
    // 0x0004E8: 0x4C58301805E71209 Fadd
    temp_139 = 0.0 - fp_c6.data[23].z;
    temp_140 = temp_134 + temp_139;
    // 0x0004F0: 0x5C68100002C72D0C Fmul
    temp_141 = temp_71 * temp_130;
    // 0x0004F8: 0x5C6810000087080A Fmul
    temp_142 = temp_136 * temp_136;
    // 0x000508: 0x59A005000077070A Ffma
    temp_143 = fma(temp_138, temp_138, temp_142);
    // 0x000510: 0x59A005000097090A Ffma
    temp_144 = fma(temp_140, temp_140, temp_143);
    // 0x000518: 0x5080000000570A0A Mufu
    temp_145 = inversesqrt(temp_144);
    // 0x000528: 0x5C68100000A7080B Fmul
    temp_146 = temp_136 * temp_145;
    // 0x000530: 0x5C68100000A70707 Fmul
    temp_147 = temp_138 * temp_145;
    // 0x000538: 0x5C68100000A70908 Fmul
    temp_148 = temp_140 * temp_145;
    // 0x000548: 0x4C69101805C70B00 Fmul
    temp_149 = 0.0 - fp_c6.data[23].x;
    temp_150 = temp_146 * temp_149;
    // 0x000550: 0x5C68100000B72C0D Fmul
    temp_151 = temp_130 * temp_146;
    // 0x000558: 0x49A1001805D70709 Ffma
    temp_152 = 0.0 - fp_c6.data[23].y;
    temp_153 = fma(temp_147, temp_152, temp_150);
    // 0x000568: 0x59A0060001A70200 Ffma
    temp_154 = fma(temp_70, temp_132, temp_141);
    // 0x000570: 0x59A0068000771A0D Ffma
    temp_155 = fma(temp_132, temp_147, temp_151);
    // 0x000578: 0x49A5049805E7080A Ffma
    temp_156 = 0.0 - fp_c6.data[23].z;
    temp_157 = fma(temp_148, temp_156, temp_153);
    temp_158 = clamp(temp_157, 0.0, 1.0);
    // 0x000588: 0x59A4000001272E00 Ffma
    temp_159 = fma(temp_69, temp_134, temp_154);
    temp_160 = clamp(temp_159, 0.0, 1.0);
    // 0x000590: 0x5C68100000B72D09 Fmul
    temp_161 = temp_71 * temp_146;
    // 0x000598: 0x59A406800087120D Ffma
    temp_162 = fma(temp_134, temp_148, temp_155);
    temp_163 = clamp(temp_162, 0.0, 1.0);
    // 0x0005A8: 0x49A2098400270A0C Ffma
    temp_164 = fma(temp_158, fp_c1.data[0].z, -6.98316002);
    // 0x0005B0: 0x3859103F80070011 Fadd
    temp_165 = 0.0 - temp_160;
    temp_166 = temp_165 + 1.0;
    // 0x0005B8: 0x59A004800077020B Ffma
    temp_167 = fma(temp_70, temp_147, temp_161);
    // 0x0005C8: 0x5080000000371111 Mufu
    temp_168 = log2(temp_166);
    // 0x0005D0: 0x49A2098400270D13 Ffma
    temp_169 = fma(temp_163, fp_c1.data[0].z, -6.98316002);
    // 0x0005D8: 0x5C68100000072D31 Fmul
    temp_170 = temp_71 * temp_160;
    // 0x0005E8: 0x5C68100000C70A07 Fmul
    temp_171 = temp_158 * temp_164;
    // 0x0005F0: 0x4C98079403A7000C Mov
    // 0x0005F8: 0x59A4058000872E0A Ffma
    temp_172 = fma(temp_69, temp_148, temp_167);
    temp_173 = clamp(temp_172, 0.0, 1.0);
    // 0x000608: 0x0103F0000007F00B Mov32i
    // 0x000610: 0x5C68100001370D09 Fmul
    temp_174 = temp_163 * temp_169;
    // 0x000618: 0x386810418007050D Fmul
    temp_175 = temp_76 * 16.0;
    // 0x000628: 0x4C59101403670C0C Fadd
    temp_176 = 0.0 - fp_c5.data[14].z;
    temp_177 = temp_176 + fp_c5.data[13].z;
    // 0x000630: 0x5CA8148000D70A0D F2f
    temp_178 = floor(temp_175);
    // 0x000638: 0x4C68101402C70E13 Fmul
    temp_179 = temp_10 * fp_c5.data[11].x;
    // 0x000648: 0x4C68101406271108 Fmul
    temp_180 = temp_168 * fp_c5.data[24].z;
    // 0x000650: 0x32A005BF00071E3E Ffma
    temp_181 = fma(temp_118, 0.5, 0.5);
    // 0x000658: 0x59A2050003F70A0B Ffma
    temp_182 = 0.0 - temp_173;
    temp_183 = fma(temp_173, temp_127, temp_182);
    // 0x000668: 0x4C68101402E7030E Fmul
    temp_184 = temp_12 * fp_c5.data[11].z;
    // 0x000670: 0x5C90008000970016 Rro
    // 0x000678: 0x32A2164000073131 Ffma
    temp_185 = 0.0 - temp_130;
    temp_186 = fma(temp_170, 2.0, temp_185);
    // 0x000688: 0x5080000000271616 Mufu
    temp_187 = exp2(temp_174);
    // 0x000690: 0x5C9000800087001B Rro
    // 0x000698: 0x4C69101805C72D08 Fmul
    temp_188 = 0.0 - fp_c6.data[23].x;
    temp_189 = temp_71 * temp_188;
    // 0x0006A8: 0x5084000000271B1B Mufu
    temp_190 = exp2(temp_180);
    temp_191 = clamp(temp_190, 0.0, 1.0);
    // 0x0006B0: 0x5C68120003E73E3E Fmul
    temp_192 = temp_181 * 0.5;
    temp_193 = temp_192 * temp_181;
    // 0x0006B8: 0x32A006C18007063D Ffma
    temp_194 = fma(temp_110, 16.0, temp_178);
    // 0x0006C8: 0x51A0058400170A0B Ffma
    temp_195 = fma(temp_173, temp_183, fp_c1.data[0].y);
    // 0x0006D0: 0x5CB0118003D70A3D F2i
    temp_196 = trunc(temp_194);
    temp_197 = max(temp_196, 0.0);
    temp_198 = uint(temp_197);
    // 0x0006D8: 0x49A1041805D70208 Ffma
    temp_199 = 0.0 - fp_c6.data[23].y;
    temp_200 = fma(temp_70, temp_199, temp_189);
    // 0x0006E8: 0x5080000000470B0B Mufu
    temp_201 = 1.0 / temp_195;
    // 0x0006F0: 0x49A1041805E72E08 Ffma
    temp_202 = 0.0 - fp_c6.data[23].z;
    temp_203 = fma(temp_69, temp_202, temp_200);
    // 0x0006F8: 0x51A00E9403871B1D Ffma
    temp_204 = fma(temp_191, temp_101, fp_c5.data[14].x);
    // 0x000708: 0x51A00E1403971B1C Ffma
    temp_205 = fma(temp_191, temp_107, fp_c5.data[14].y);
    // 0x000710: 0x51A0061403A71B1B Ffma
    temp_206 = fma(temp_191, temp_177, fp_c5.data[14].z);
    // 0x000718: 0x59A1000000073E0C Ffma
    temp_207 = 0.0 - temp_160;
    temp_208 = fma(temp_193, temp_207, temp_160);
    // 0x000728: 0x3848000000873D32 Shl
    temp_209 = int(temp_198) << 8;
    // 0x000730: 0x5C5C30000FF70805 Fadd
    temp_210 = temp_203 + -0.0;
    temp_211 = clamp(temp_210, 0.0, 1.0);
    // 0x000738: 0xEF94008200473232 Ldc
    temp_212 = temp_209 + 0x2004;
    temp_213 = uint(temp_212) >> 2;
    temp_214 = temp_213 >> 2;
    temp_215 = int(temp_213) & 3;
    temp_216 = fp_c8.data[int(temp_214)][temp_215];
    // 0x000748: 0x5C58100000C73E0A Fadd
    temp_217 = temp_193 + temp_208;
    // 0x000750: 0x5C68100000B74006 Fmul
    temp_218 = temp_125 * temp_201;
    // 0x000758: 0x5080000000470A0A Mufu
    temp_219 = 1.0 / temp_217;
    // 0x000768: 0x5C58100003B70803 Fadd
    temp_220 = temp_203 + temp_104;
    // 0x000770: 0x5C58100003A70809 Fadd
    temp_221 = temp_203 + temp_102;
    // 0x000778: 0x59A1028003E7050C Ffma
    temp_222 = 0.0 - temp_193;
    temp_223 = fma(temp_211, temp_222, temp_211);
    // 0x000788: 0x5C58100003970808 Fadd
    temp_224 = temp_203 + temp_103;
    // 0x000790: 0x5C68100000670606 Fmul
    temp_225 = temp_218 * temp_218;
    // 0x000798: 0x5C68100003870303 Fmul
    temp_226 = temp_220 * temp_116;
    // 0x0007A8: 0x5C68100003770909 Fmul
    temp_227 = temp_221 * temp_112;
    // 0x0007B0: 0x5C58100000C73E0C Fadd
    temp_228 = temp_193 + temp_223;
    // 0x0007B8: 0x5C68100003670808 Fmul
    temp_229 = temp_224 * temp_114;
    // 0x0007C8: 0x5080000000470C11 Mufu
    temp_230 = 1.0 / temp_228;
    // 0x0007D0: 0x3868103F00070A3C Fmul
    temp_231 = temp_219 * 0.5;
    // 0x0007D8: 0x5C9000800077000A Rro
    // 0x0007E8: 0x5080000000270A0A Mufu
    temp_232 = exp2(temp_171);
    // 0x0007F0: 0x5C6017800097FF09 Fmnmx
    temp_233 = max(0.0, temp_227);
    // 0x0007F8: 0x4C58301407B70F0C Fadd
    temp_234 = 0.0 - fp_c5.data[30].w;
    temp_235 = temp_117 + temp_234;
    // 0x000808: 0x5C6017800087FF08 Fmnmx
    temp_236 = max(0.0, temp_229);
    // 0x000810: 0x5C6017800037FF14 Fmnmx
    temp_237 = max(0.0, temp_226);
    // 0x000818: 0x5C68100003470909 Fmul
    temp_238 = temp_233 * temp_123;
    // 0x000828: 0x5C68100001173C0D Fmul
    temp_239 = temp_231 * temp_230;
    // 0x000830: 0x49A5199403070411 Ffma
    temp_240 = 0.0 - fp_c5.data[12].x;
    temp_241 = fma(temp_8, temp_240, 1.0);
    temp_242 = clamp(temp_241, 0.0, 1.0);
    // 0x000838: 0x49A0198400473933 Ffma
    temp_243 = fma(temp_103, fp_c1.data[1].x, 1.0);
    // 0x000848: 0x4C58301407B70E04 Fadd
    temp_244 = 0.0 - fp_c5.data[30].w;
    temp_245 = temp_184 + temp_244;
    // 0x000850: 0x5080000000473333 Mufu
    temp_246 = 1.0 / temp_243;
    // 0x000858: 0x51A0061407B72B0C Ffma
    temp_247 = fma(temp_7, temp_235, fp_c5.data[30].w);
    // 0x000868: 0x5C68100000D70607 Fmul
    temp_248 = temp_225 * temp_239;
    // 0x000870: 0x4C58301407B7130D Fadd
    temp_249 = 0.0 - fp_c5.data[30].w;
    temp_250 = temp_179 + temp_249;
    // 0x000878: 0x4C98079808A70006 Mov
    // 0x000888: 0x4C68101801570909 Fmul
    temp_251 = temp_238 * fp_c6.data[5].y;
    // 0x000890: 0x51A0021407B72B0B Ffma
    temp_252 = fma(temp_7, temp_245, fp_c5.data[30].w);
    // 0x000898: 0x59A10B0001670C15 Ffma
    temp_253 = 0.0 - temp_187;
    temp_254 = fma(temp_247, temp_253, temp_187);
    // 0x0008A8: 0x5C68100000770505 Fmul
    temp_255 = temp_211 * temp_248;
    // 0x0008B0: 0x51A0069407B72B0D Ffma
    temp_256 = fma(temp_7, temp_250, fp_c5.data[30].w);
    // 0x0008B8: 0x4C68101808770603 Fmul
    temp_257 = fp_c6.data[34].z * fp_c6.data[33].w;
    // 0x0008C8: 0x59A1050000A70C06 Ffma
    temp_258 = 0.0 - temp_232;
    temp_259 = fma(temp_247, temp_258, temp_232);
    // 0x0008D0: 0x5C68100003571414 Fmul
    temp_260 = temp_237 * temp_121;
    // 0x0008D8: 0x5C68100003370808 Fmul
    temp_261 = temp_236 * temp_246;
    // 0x0008E8: 0x5C58100001570C17 Fadd
    temp_262 = temp_247 + temp_254;
    // 0x0008F0: 0x59A10B0001670D07 Ffma
    temp_263 = 0.0 - temp_187;
    temp_264 = fma(temp_256, temp_263, temp_187);
    // 0x0008F8: 0x59A1050000A70D04 Ffma
    temp_265 = 0.0 - temp_232;
    temp_266 = fma(temp_256, temp_265, temp_232);
    // 0x000908: 0x59A1050000A70B0A Ffma
    temp_267 = 0.0 - temp_232;
    temp_268 = fma(temp_252, temp_267, temp_232);
    // 0x000910: 0x59A10B0001670B16 Ffma
    temp_269 = 0.0 - temp_187;
    temp_270 = fma(temp_252, temp_269, temp_187);
    // 0x000918: 0x4C68101801670815 Fmul
    temp_271 = temp_261 * fp_c6.data[5].z;
    // 0x000928: 0x5C58100000670C06 Fadd
    temp_272 = temp_247 + temp_259;
    // 0x000930: 0x5C58100000770D07 Fadd
    temp_273 = temp_256 + temp_264;
    // 0x000938: 0x5C58100000470D04 Fadd
    temp_274 = temp_256 + temp_266;
    // 0x000948: 0x5C58100000A70B0A Fadd
    temp_275 = temp_252 + temp_268;
    // 0x000950: 0x5C58100001670B16 Fadd
    temp_276 = temp_252 + temp_270;
    // 0x000958: 0x4C68101406471717 Fmul
    temp_277 = temp_262 * fp_c5.data[25].x;
    // 0x000968: 0x1E23EA2F98370909 Fmul32i
    temp_278 = temp_251 * 0.318309873;
    // 0x000970: 0x4C68101406470718 Fmul
    temp_279 = temp_273 * fp_c5.data[25].x;
    // 0x000978: 0x4C68101801471414 Fmul
    temp_280 = temp_260 * fp_c6.data[5].x;
    // 0x000988: 0x4C68101406470A0A Fmul
    temp_281 = temp_275 * fp_c5.data[25].x;
    // 0x000990: 0x4C68101406471616 Fmul
    temp_282 = temp_276 * fp_c5.data[25].x;
    // 0x000998: 0x1E23EA2F98371515 Fmul32i
    temp_283 = temp_271 * 0.318309873;
    // 0x0009A8: 0x4C68101406470404 Fmul
    temp_284 = temp_274 * fp_c5.data[25].x;
    // 0x0009B0: 0x4C68101406470606 Fmul
    temp_285 = temp_272 * fp_c5.data[25].x;
    // 0x0009B8: 0x1E23EA2F98371419 Fmul32i
    temp_286 = temp_280 * 0.318309873;
    // 0x0009C8: 0x49A208980AC71114 Ffma
    temp_287 = 0.0 - temp_242;
    temp_288 = fma(temp_242, fp_c6.data[43].x, temp_287);
    // 0x0009D0: 0x5B6603800FF73207 Isetp
    temp_289 = floatBitsToUint(temp_216) <= 0u;
    // 0x0009D8: 0x3858103F80071414 Fadd
    temp_290 = temp_288 + 1.0;
    // 0x0009E8: 0x59A40A000147131F Ffma
    temp_291 = fma(temp_179, temp_290, temp_290);
    temp_292 = clamp(temp_291, 0.0, 1.0);
    // 0x0009F0: 0xF0F0000034170000 Depbar
    // 0x0009F8: 0x51A0019801472807 Ffma
    temp_293 = fma(temp_87, temp_257, fp_c6.data[5].x);
    // 0x000A08: 0x51A0019801572908 Ffma
    temp_294 = fma(temp_88, temp_257, fp_c6.data[5].y);
    // 0x000A10: 0x51A0019801672603 Ffma
    temp_295 = fma(temp_89, temp_257, fp_c6.data[5].z);
    // 0x000A18: 0x5C68100000770404 Fmul
    temp_296 = temp_284 * temp_293;
    // 0x000A28: 0x5C68100000870606 Fmul
    temp_297 = temp_285 * temp_294;
    // 0x000A30: 0x5C68100000370A03 Fmul
    temp_298 = temp_281 * temp_295;
    // 0x000A38: 0x59A104800097170A Ffma
    temp_299 = 0.0 - temp_278;
    temp_300 = fma(temp_277, temp_299, temp_278);
    // 0x000A48: 0x59A10A8001571609 Ffma
    temp_301 = 0.0 - temp_283;
    temp_302 = fma(temp_282, temp_301, temp_283);
    // 0x000A50: 0x49A208980AD71115 Ffma
    temp_303 = 0.0 - temp_242;
    temp_304 = fma(temp_242, fp_c6.data[43].y, temp_303);
    // 0x000A58: 0x49A208980AE71116 Ffma
    temp_305 = 0.0 - temp_242;
    temp_306 = fma(temp_242, fp_c6.data[43].z, temp_305);
    // 0x000A68: 0x5C68100000570422 Fmul
    temp_307 = temp_296 * temp_255;
    // 0x000A70: 0x5C68100000570623 Fmul
    temp_308 = temp_297 * temp_255;
    // 0x000A78: 0x5C6810000057032A Fmul
    temp_309 = temp_298 * temp_255;
    // 0x000A88: 0x5C68100000070211 Fmul
    temp_310 = temp_70 * temp_160;
    // 0x000A90: 0x5C68100000072E17 Fmul
    temp_311 = temp_69 * temp_160;
    // 0x000A98: 0x3858103F80071515 Fadd
    temp_312 = temp_304 + 1.0;
    // 0x000AA8: 0x3858103F80071621 Fadd
    temp_313 = temp_306 + 1.0;
    // 0x000AB0: 0x59A10C8001971807 Ffma
    temp_314 = 0.0 - temp_286;
    temp_315 = fma(temp_279, temp_314, temp_286);
    // 0x000AB8: 0x5C9807800FF70008 Mov
    // 0x000AC8: 0xEF5400000007FF07 Stl
    local_memory[0] = floatBitsToUint(temp_315);
    // 0x000AD0: 0x5C9807800FF70006 Mov
    // 0x000AD8: 0x5C9807800FF70005 Mov
    // 0x000AE8: 0x5C9807800FF70004 Mov
    // 0x000AF0: 0x5C9807800FF70003 Mov
    // 0x000AF8: 0x32A20D4000071116 Ffma
    temp_316 = 0.0 - temp_132;
    temp_317 = fma(temp_310, 2.0, temp_316);
    // 0x000B08: 0x32A2094000071717 Ffma
    temp_318 = 0.0 - temp_134;
    temp_319 = fma(temp_311, 2.0, temp_318);
    // 0x000B10: 0x59A40A8001570F20 Ffma
    temp_320 = fma(temp_117, temp_312, temp_312);
    temp_321 = clamp(temp_320, 0.0, 1.0);
    // 0x000B18: 0x59A4108002170E21 Ffma
    temp_322 = fma(temp_184, temp_313, temp_313);
    temp_323 = clamp(temp_322, 0.0, 1.0);
    // 0x000B28: 0x1E23E22F98372222 Fmul32i
    temp_324 = temp_307 * 0.159154937;
    // 0x000B30: 0x1E23E22F98372323 Fmul32i
    temp_325 = temp_308 * 0.159154937;
    // 0x000B38: 0x5C9807800FF70007 Mov
    // 0x000B48: 0x1E23E22F98372A2A Fmul32i
    temp_326 = temp_309 * 0.159154937;
    // 0x000B50: 0xF0F800000000000F Sync
    temp_327 = 0.0;
    temp_328 = 0.0;
    temp_329 = 0.0;
    temp_330 = 0.0;
    temp_331 = 0.0;
    temp_332 = 0.0;
    temp_333 = 0.0;
    temp_334 = 0.0;
    temp_335 = 0.0;
    temp_336 = 0.0;
    temp_337 = 0.0;
    temp_338 = 0.0;
    if (!temp_289)
    {
        // 0x000B58: 0x5C9807800FF70030 Mov
        temp_339 = 0;
        do
        {
            // 0x000B68: 0x5C18020003073D2F Iscadd
            temp_341 = int(temp_198) << 4;
            temp_342 = temp_341 + temp_339;
            // 0x000B70: 0xE003FF87CFF7FF41 Ipa
            // 0x000B78: 0x1C00000000173030 Iadd32i
            temp_343 = temp_339 + 1;
            // 0x000B88: 0xE003FF87CFF7FF43 Ipa
            // 0x000B90: 0x3848000000472F2F Shl
            temp_344 = temp_342 << 4;
            // 0x000B98: 0xE003FF87CFF7FF42 Ipa
            // 0x000BA8: 0x5B6C03800327300F Isetp
            temp_340 = uint(temp_343) >= floatBitsToUint(temp_216);
            // 0x000BB0: 0xE29000005F800000 Ssy
            // 0x000BB8: 0xEF94008200072F2F Ldc
            temp_345 = temp_344 + 0x2000;
            temp_346 = uint(temp_345) >> 2;
            temp_347 = temp_346 >> 2;
            temp_348 = int(temp_346) & 3;
            temp_349 = fp_c8.data[int(temp_347)][temp_348];
            // 0x000BC8: 0x5080000000474141 Mufu
            // 0x000BD0: 0x5080000000474343 Mufu
            // 0x000BD8: 0x5080000000474242 Mufu
            // 0x000BE8: 0xE043FF8D0417FF41 Ipa
            temp_350 = in_attr5.x;
            // 0x000BF0: 0xE043FF8D8437FF43 Ipa
            temp_351 = in_attr5.z;
            // 0x000BF8: 0xE043FF8D4427FF42 Ipa
            temp_352 = in_attr5.y;
            // 0x000C08: 0x3848000000672F2F Shl
            temp_353 = floatBitsToInt(temp_349) << 6;
            // 0x000C10: 0xEF95008001072F10 Ldc
            temp_354 = temp_353 + 16;
            temp_355 = uint(temp_354) >> 2;
            temp_356 = temp_355 >> 2;
            temp_357 = int(temp_355) & 3;
            temp_358 = fp_c8.data[int(temp_356)][temp_357];
            temp_359 = int(temp_355) + 1;
            temp_360 = uint(temp_359) >> 2;
            temp_361 = temp_359 & 3;
            temp_362 = fp_c8.data[int(temp_360)][temp_361];
            // 0x000C18: 0xEF95008001872F14 Ldc
            temp_363 = temp_353 + 24;
            temp_364 = uint(temp_363) >> 2;
            temp_365 = temp_364 >> 2;
            temp_366 = int(temp_364) & 3;
            temp_367 = fp_c8.data[int(temp_365)][temp_366];
            temp_368 = int(temp_364) + 1;
            temp_369 = uint(temp_368) >> 2;
            temp_370 = temp_368 & 3;
            temp_371 = fp_c8.data[int(temp_369)][temp_370];
            // 0x000C28: 0xEF95008002072F18 Ldc
            temp_372 = temp_353 + 32;
            temp_373 = uint(temp_372) >> 2;
            temp_374 = temp_373 >> 2;
            temp_375 = int(temp_373) & 3;
            temp_376 = fp_c8.data[int(temp_374)][temp_375];
            temp_377 = int(temp_373) + 1;
            temp_378 = uint(temp_377) >> 2;
            temp_379 = temp_377 & 3;
            temp_380 = fp_c8.data[int(temp_378)][temp_379];
            // 0x000C30: 0x5C58300004171041 Fadd
            temp_381 = 0.0 - temp_350;
            temp_382 = temp_358 + temp_381;
            // 0x000C38: 0x5C58300004271142 Fadd
            temp_383 = 0.0 - temp_352;
            temp_384 = temp_362 + temp_383;
            // 0x000C48: 0x5C58300004371443 Fadd
            temp_385 = 0.0 - temp_351;
            temp_386 = temp_367 + temp_385;
            // 0x000C50: 0x5C68100004174144 Fmul
            temp_387 = temp_382 * temp_382;
            // 0x000C58: 0x59A1218004371546 Ffma
            temp_388 = 0.0 - temp_386;
            temp_389 = fma(temp_371, temp_388, temp_386);
            // 0x000C68: 0xEF95008003872F14 Ldc
            temp_390 = temp_353 + 56;
            temp_391 = uint(temp_390) >> 2;
            temp_392 = temp_391 >> 2;
            temp_393 = int(temp_391) & 3;
            temp_394 = fp_c8.data[int(temp_392)][temp_393];
            temp_395 = int(temp_391) + 1;
            temp_396 = uint(temp_395) >> 2;
            temp_397 = temp_395 & 3;
            temp_398 = fp_c8.data[int(temp_396)][temp_397];
            // 0x000C70: 0x59A0220004274244 Ffma
            temp_399 = fma(temp_384, temp_384, temp_387);
            // 0x000C78: 0x59A0220004674647 Ffma
            temp_400 = fma(temp_389, temp_389, temp_399);
            // 0x000C88: 0x5080000000574745 Mufu
            temp_401 = inversesqrt(temp_400);
            // 0x000C90: 0x5080000000874747 Mufu
            temp_402 = sqrt(temp_400);
            // 0x000C98: 0x5C68100004574110 Fmul
            temp_403 = temp_382 * temp_401;
            // 0x000CA8: 0x5C68100004574211 Fmul
            temp_404 = temp_384 * temp_401;
            // 0x000CB0: 0x5C68100004574645 Fmul
            temp_405 = temp_389 * temp_401;
            // 0x000CB8: 0x5C69100001871010 Fmul
            temp_406 = 0.0 - temp_376;
            temp_407 = temp_403 * temp_406;
            // 0x000CC8: 0xEF94008002872F18 Ldc
            temp_408 = temp_353 + 40;
            temp_409 = uint(temp_408) >> 2;
            temp_410 = temp_409 >> 2;
            temp_411 = int(temp_409) & 3;
            temp_412 = fp_c8.data[int(temp_410)][temp_411];
            // 0x000CD0: 0x59A1080001971119 Ffma
            temp_413 = 0.0 - temp_380;
            temp_414 = fma(temp_404, temp_413, temp_407);
            // 0x000CD8: 0xEF95008003072F10 Ldc
            temp_415 = temp_353 + 48;
            temp_416 = uint(temp_415) >> 2;
            temp_417 = temp_416 >> 2;
            temp_418 = int(temp_416) & 3;
            temp_419 = fp_c8.data[int(temp_417)][temp_418];
            temp_420 = int(temp_416) + 1;
            temp_421 = uint(temp_420) >> 2;
            temp_422 = temp_420 & 3;
            temp_423 = fp_c8.data[int(temp_421)][temp_422];
            // 0x000CE8: 0x59A10C8001874518 Ffma
            temp_424 = 0.0 - temp_412;
            temp_425 = fma(temp_405, temp_424, temp_414);
            // 0x000CF0: 0x010404000007F019 Mov32i
            // 0x000CF8: 0x59A4088004771047 Ffma
            temp_426 = fma(temp_419, temp_402, temp_423);
            temp_427 = clamp(temp_426, 0.0, 1.0);
            // 0x000D08: 0x59A40A8001471814 Ffma
            temp_428 = fma(temp_425, temp_394, temp_398);
            temp_429 = clamp(temp_428, 0.0, 1.0);
            // 0x000D10: 0x33A00CC000074718 Ffma
            temp_430 = fma(temp_427, -2.0, 3.0);
            // 0x000D18: 0x5C68100004774715 Fmul
            temp_431 = temp_427 * temp_427;
            // 0x000D28: 0x33A00CC000071419 Ffma
            temp_432 = fma(temp_429, -2.0, 3.0);
            // 0x000D30: 0x5C68100001471414 Fmul
            temp_433 = temp_429 * temp_429;
            // 0x000D38: 0x5C68100001571815 Fmul
            temp_434 = temp_430 * temp_431;
            // 0x000D48: 0x5C68100001971418 Fmul
            temp_435 = temp_433 * temp_432;
            // 0x000D50: 0x39585042F0074314 Fadd
            temp_436 = abs(temp_386);
            temp_437 = temp_436 + -120.0;
            // 0x000D58: 0x5C68100001571815 Fmul
            temp_438 = temp_435 * temp_434;
            // 0x000D68: 0x1EABD4CCCCD71414 Fmul32i
            temp_439 = temp_437 * -0.0500000007;
            temp_440 = clamp(temp_439, 0.0, 1.0);
            // 0x000D70: 0x5C68100001571414 Fmul
            temp_441 = temp_440 * temp_438;
            // 0x000D78: 0x36247F9000171515 Xmad
            temp_442 = floatBitsToUint(temp_438) >> 16;
            temp_443 = int(temp_442) << 16;
            // 0x000D88: 0x5BB383800FF71407 Fsetp
            temp_444 = temp_441 <= 0.0;
            // 0x000D90: 0x7A05083C0F00FF15 Hadd2
            temp_339 = temp_343;
            temp_445 = uint(temp_443);
            temp_446 = temp_327;
            temp_447 = temp_328;
            temp_448 = temp_329;
            temp_449 = temp_330;
            temp_450 = temp_331;
            temp_451 = temp_332;
            if (temp_444)
            {
                temp_452 = unpackHalf2x16(uint(temp_443)).y;
                temp_453 = packHalf2x16(vec2(1.0, temp_452));
                temp_445 = temp_453;
            }
            // 0x000D98: 0x5D2103902FF71507 Hsetp2
            temp_454 = unpackHalf2x16(temp_445).x;
            temp_455 = temp_454 == 0.0;
            // 0x000DA8: 0xF0F800000008000F Sync
            if (temp_455)
            {
                // 0x000DB0: 0x5080000000471010 Mufu
                temp_456 = 1.0 / temp_419;
                // 0x000DB8: 0x5C69100001071111 Fmul
                temp_457 = 0.0 - temp_456;
                temp_458 = temp_423 * temp_457;
                // 0x000DC8: 0xEF94008002C72F10 Ldc
                temp_459 = temp_353 + 44;
                temp_460 = uint(temp_459) >> 2;
                temp_461 = temp_460 >> 2;
                temp_462 = int(temp_460) & 3;
                temp_463 = fp_c8.data[int(temp_461)][temp_462];
                // 0x000DD0: 0x5C60138001174343 Fmnmx
                temp_464 = min(temp_386, temp_458);
                // 0x000DD8: 0x5C61178004371111 Fmnmx
                temp_465 = 0.0 - temp_458;
                temp_466 = max(temp_465, temp_464);
                // 0x000DE8: 0x59A0220001171144 Ffma
                temp_467 = fma(temp_466, temp_466, temp_399);
                // 0x000DF0: 0x5080000000574418 Mufu
                temp_468 = inversesqrt(temp_467);
                // 0x000DF8: 0x5080000000874444 Mufu
                temp_469 = sqrt(temp_467);
                // 0x000E08: 0x5C68100001874141 Fmul
                temp_470 = temp_382 * temp_468;
                // 0x000E10: 0x5C68100001874242 Fmul
                temp_471 = temp_384 * temp_468;
                // 0x000E18: 0x5C68100001871111 Fmul
                temp_472 = temp_466 * temp_468;
                // 0x000E28: 0x5C58100004172C15 Fadd
                temp_473 = temp_130 + temp_470;
                // 0x000E30: 0x5C58100004271A18 Fadd
                temp_474 = temp_132 + temp_471;
                // 0x000E38: 0x5080000000471010 Mufu
                temp_475 = 1.0 / temp_463;
                // 0x000E48: 0x5C68100001571519 Fmul
                temp_476 = temp_473 * temp_473;
                // 0x000E50: 0x5C58100001171243 Fadd
                temp_477 = temp_134 + temp_472;
                // 0x000E58: 0x59A00C8001871819 Ffma
                temp_478 = fma(temp_474, temp_474, temp_476);
                // 0x000E68: 0x59A00C8004374319 Ffma
                temp_479 = fma(temp_477, temp_477, temp_478);
                // 0x000E70: 0x51A0220400571010 Ffma
                temp_480 = fma(temp_475, temp_469, fp_c1.data[1].y);
                // 0x000E78: 0x5080000000571919 Mufu
                temp_481 = inversesqrt(temp_479);
                // 0x000E88: 0x5C68100001971515 Fmul
                temp_482 = temp_473 * temp_481;
                // 0x000E90: 0x5C68100001971818 Fmul
                temp_483 = temp_474 * temp_481;
                // 0x000E98: 0x5C68100001974319 Fmul
                temp_484 = temp_477 * temp_481;
                // 0x000EA8: 0x5C68100001574143 Fmul
                temp_485 = temp_470 * temp_482;
                // 0x000EB0: 0x5C68100004172D41 Fmul
                temp_486 = temp_71 * temp_470;
                // 0x000EB8: 0x5C68100001572D15 Fmul
                temp_487 = temp_71 * temp_482;
                // 0x000EC8: 0x59A0218001874244 Ffma
                temp_488 = fma(temp_471, temp_483, temp_485);
                // 0x000ED0: 0x5080000000471043 Mufu
                temp_489 = 1.0 / temp_480;
                // 0x000ED8: 0x59A0208004270241 Ffma
                temp_490 = fma(temp_70, temp_471, temp_486);
                // 0x000EE8: 0x59A00A8001870218 Ffma
                temp_491 = fma(temp_70, temp_483, temp_487);
                // 0x000EF0: 0x01040DF760C7F042 Mov32i
                // 0x000EF8: 0x59A4220001971144 Ffma
                temp_492 = fma(temp_472, temp_484, temp_488);
                temp_493 = clamp(temp_492, 0.0, 1.0);
                // 0x000F08: 0x59A0208001172E15 Ffma
                temp_494 = fma(temp_69, temp_472, temp_490);
                // 0x000F10: 0xEF95008000072F10 Ldc
                temp_495 = uint(temp_353) >> 2;
                temp_496 = temp_495 >> 2;
                temp_497 = int(temp_495) & 3;
                temp_498 = fp_c8.data[int(temp_496)][temp_497];
                temp_499 = int(temp_495) + 1;
                temp_500 = uint(temp_499) >> 2;
                temp_501 = temp_499 & 3;
                temp_502 = fp_c8.data[int(temp_500)][temp_501];
                // 0x000F18: 0x59A40C0001972E19 Ffma
                temp_503 = fma(temp_69, temp_484, temp_491);
                temp_504 = clamp(temp_503, 0.0, 1.0);
                // 0x000F28: 0xEF94008000872F2F Ldc
                temp_505 = temp_353 + 8;
                temp_506 = uint(temp_505) >> 2;
                temp_507 = temp_506 >> 2;
                temp_508 = int(temp_506) & 3;
                temp_509 = fp_c8.data[int(temp_507)][temp_508];
                // 0x000F30: 0x1E23FB3333374343 Fmul32i
                temp_510 = temp_489 * 1.39999998;
                // 0x000F38: 0x49A2210400274418 Ffma
                temp_511 = fma(temp_493, fp_c1.data[0].z, -6.98316002);
                // 0x000F48: 0x5C5C30000FF71542 Fadd
                temp_512 = temp_494 + -0.0;
                temp_513 = clamp(temp_512, 0.0, 1.0);
                // 0x000F50: 0x59A20C8001973F41 Ffma
                temp_514 = 0.0 - temp_504;
                temp_515 = fma(temp_127, temp_504, temp_514);
                // 0x000F58: 0x5C68100004374343 Fmul
                temp_516 = temp_510 * temp_510;
                // 0x000F68: 0x5C68100001874418 Fmul
                temp_517 = temp_493 * temp_511;
                // 0x000F70: 0x51A0208400171941 Ffma
                temp_518 = fma(temp_504, temp_515, fp_c1.data[0].y);
                // 0x000F78: 0x59A1218004371543 Ffma
                temp_519 = 0.0 - temp_516;
                temp_520 = fma(temp_494, temp_519, temp_516);
                // 0x000F88: 0x5080000000474141 Mufu
                temp_521 = 1.0 / temp_518;
                // 0x000F90: 0x5C90008001870018 Rro
                // 0x000F98: 0x59A1210004273E19 Ffma
                temp_522 = 0.0 - temp_513;
                temp_523 = fma(temp_193, temp_522, temp_513);
                // 0x000FA8: 0x5080000000271818 Mufu
                temp_524 = exp2(temp_517);
                // 0x000FB0: 0x5C58100004371543 Fadd
                temp_525 = temp_494 + temp_520;
                // 0x000FB8: 0x5C58100001973E45 Fadd
                temp_526 = temp_193 + temp_523;
                // 0x000FC8: 0x5080000000474515 Mufu
                temp_527 = 1.0 / temp_526;
                // 0x000FD0: 0x5C58100004373B19 Fadd
                temp_528 = temp_104 + temp_525;
                // 0x000FD8: 0x5C68100004174041 Fmul
                temp_529 = temp_125 * temp_521;
                // 0x000FE8: 0x59A10C0001870D44 Ffma
                temp_530 = 0.0 - temp_524;
                temp_531 = fma(temp_256, temp_530, temp_524);
                // 0x000FF0: 0x5C68100001973819 Fmul
                temp_532 = temp_116 * temp_528;
                // 0x000FF8: 0x5C68100004174141 Fmul
                temp_533 = temp_529 * temp_529;
                // 0x001008: 0x5C58100004470D44 Fadd
                temp_534 = temp_256 + temp_531;
                // 0x001010: 0x5C6017800197FF46 Fmnmx
                temp_535 = max(0.0, temp_532);
                // 0x001018: 0x5C68100001573C15 Fmul
                temp_536 = temp_231 * temp_527;
                // 0x001028: 0x5C68100001071410 Fmul
                temp_537 = temp_441 * temp_498;
                // 0x001030: 0x5C68100001171411 Fmul
                temp_538 = temp_441 * temp_502;
                // 0x001038: 0x4C68101406474419 Fmul
                temp_539 = temp_534 * fp_c5.data[25].x;
                // 0x001048: 0x5C68100004673546 Fmul
                temp_540 = temp_121 * temp_535;
                // 0x001050: 0x5C68100001574115 Fmul
                temp_541 = temp_533 * temp_536;
                // 0x001058: 0x5C68100002F7142F Fmul
                temp_542 = temp_441 * temp_509;
                // 0x001068: 0x5C58100004373A14 Fadd
                temp_543 = temp_102 + temp_525;
                // 0x001070: 0x5C68100004671046 Fmul
                temp_544 = temp_537 * temp_540;
                // 0x001078: 0x5C68100001071910 Fmul
                temp_545 = temp_539 * temp_537;
                // 0x001088: 0x59A10C0001870C19 Ffma
                temp_546 = 0.0 - temp_524;
                temp_547 = fma(temp_247, temp_546, temp_524);
                // 0x001090: 0x5C58100004373943 Fadd
                temp_548 = temp_103 + temp_525;
                // 0x001098: 0x59A10C0001870B18 Ffma
                temp_549 = 0.0 - temp_524;
                temp_550 = fma(temp_252, temp_549, temp_524);
                // 0x0010A8: 0x5C68100001473714 Fmul
                temp_551 = temp_112 * temp_543;
                // 0x0010B0: 0x5C68100001574215 Fmul
                temp_552 = temp_513 * temp_541;
                // 0x0010B8: 0x49A0028400774605 Ffma
                temp_553 = fma(temp_544, fp_c1.data[1].w, temp_327);
                // 0x0010C8: 0x5C58100001970C19 Fadd
                temp_554 = temp_247 + temp_547;
                // 0x0010D0: 0x5C68100004373643 Fmul
                temp_555 = temp_114 * temp_548;
                // 0x0010D8: 0x5C58100001870B18 Fadd
                temp_556 = temp_252 + temp_550;
                // 0x0010E8: 0x5C6017800147FF41 Fmnmx
                temp_557 = max(0.0, temp_551);
                // 0x0010F0: 0x4C68101406471942 Fmul
                temp_558 = temp_554 * fp_c5.data[25].x;
                // 0x0010F8: 0x5C6017800437FF14 Fmnmx
                temp_559 = max(0.0, temp_555);
                // 0x001108: 0x4C68101406471818 Fmul
                temp_560 = temp_556 * fp_c5.data[25].x;
                // 0x001110: 0x5C68100004173443 Fmul
                temp_561 = temp_123 * temp_557;
                // 0x001118: 0x5C68100001174242 Fmul
                temp_562 = temp_558 * temp_538;
                // 0x001128: 0x5C68100001473314 Fmul
                temp_563 = temp_246 * temp_559;
                // 0x001130: 0x5C68100002F71818 Fmul
                temp_564 = temp_560 * temp_542;
                // 0x001138: 0x5C68100004371143 Fmul
                temp_565 = temp_538 * temp_561;
                // 0x001148: 0x5C68100001571011 Fmul
                temp_566 = temp_545 * temp_552;
                // 0x001150: 0x5C68100001574242 Fmul
                temp_567 = temp_562 * temp_552;
                // 0x001158: 0x5C68100001472F14 Fmul
                temp_568 = temp_542 * temp_563;
                // 0x001168: 0x5C68100001571818 Fmul
                temp_569 = temp_564 * temp_552;
                // 0x001170: 0x49A0020400774304 Ffma
                temp_570 = fma(temp_565, fp_c1.data[1].w, temp_328);
                // 0x001178: 0x49A0040400671108 Ffma
                temp_571 = fma(temp_566, fp_c1.data[1].z, temp_329);
                // 0x001188: 0x49A0038400674207 Ffma
                temp_572 = fma(temp_567, fp_c1.data[1].z, temp_330);
                // 0x001190: 0x49A0018400771403 Ffma
                temp_573 = fma(temp_568, fp_c1.data[1].w, temp_331);
                // 0x001198: 0x49A0030400671806 Ffma
                temp_574 = fma(temp_569, fp_c1.data[1].z, temp_332);
                // 0x0011A8: 0xF0F800000007000F Sync
                temp_446 = temp_553;
                temp_447 = temp_570;
                temp_448 = temp_571;
                temp_449 = temp_572;
                temp_450 = temp_573;
                temp_451 = temp_574;
            }
            // 0x0011B0: 0xE2400FFF9A89000F Bra
            temp_327 = temp_446;
            temp_328 = temp_447;
            temp_329 = temp_448;
            temp_330 = temp_449;
            temp_331 = temp_450;
            temp_332 = temp_451;
            temp_333 = temp_447;
            temp_334 = temp_450;
            temp_335 = temp_448;
            temp_336 = temp_449;
            temp_337 = temp_451;
            temp_338 = temp_446;
        }
        while (!temp_340);
        // 0x0011B8: 0xF0F800000007000F Sync
    }
    // 0x0011C8: 0x4C58101405472D2D Fadd
    temp_575 = temp_71 + fp_c5.data[21].x;
    // 0x0011D0: 0xE003FF87CFF7FF19 Ipa
    // 0x0011D8: 0x4C58101405570210 Fadd
    temp_576 = temp_70 + fp_c5.data[21].y;
    // 0x0011E8: 0xEF4410000007FF41 Ldl
    temp_577 = uintBitsToFloat(local_memory[0]);
    // 0x0011F0: 0x4C59101405672E2E Fadd
    temp_578 = 0.0 - temp_69;
    temp_579 = temp_578 + fp_c5.data[21].z;
    // 0x0011F8: 0x5C62578001673114 Fmnmx
    temp_580 = abs(temp_186);
    temp_581 = abs(temp_317);
    temp_582 = max(temp_580, temp_581);
    // 0x001208: 0x4C98079C02070037 Mov
    // 0x001210: 0x5C68100002D72D11 Fmul
    temp_583 = temp_575 * temp_575;
    // 0x001218: 0x5C60578001471718 Fmnmx
    temp_584 = abs(temp_319);
    temp_585 = max(temp_584, temp_582);
    // 0x001228: 0x5080000000471818 Mufu
    temp_586 = 1.0 / temp_585;
    // 0x001230: 0x59A0088001071011 Ffma
    temp_587 = fma(temp_576, temp_576, temp_583);
    // 0x001238: 0x59A0088002E72E11 Ffma
    temp_588 = fma(temp_579, temp_579, temp_587);
    // 0x001248: 0x508000000057112F Mufu
    temp_589 = inversesqrt(temp_588);
    // 0x001250: 0x5C68100001873115 Fmul
    temp_590 = temp_186 * temp_586;
    // 0x001258: 0x5C68100001871616 Fmul
    temp_591 = temp_317 * temp_586;
    // 0x001268: 0x5C69100001871717 Fmul
    temp_592 = 0.0 - temp_586;
    temp_593 = temp_319 * temp_592;
    // 0x001270: 0x5C68100002F72D2D Fmul
    temp_594 = temp_575 * temp_589;
    // 0x001278: 0x5C68100002F71012 Fmul
    temp_595 = temp_576 * temp_589;
    // 0x001288: 0x5C68100002F72E2F Fmul
    temp_596 = temp_579 * temp_589;
    // 0x001290: 0x508000000047192E Mufu
    // 0x001298: 0x5C62578001272D10 Fmnmx
    temp_597 = abs(temp_594);
    temp_598 = abs(temp_595);
    temp_599 = max(temp_597, temp_598);
    // 0x0012A8: 0xE043FF9102E7FF30 Ipa
    temp_600 = in_attr9.x;
    // 0x0012B0: 0x5C60578001072F14 Fmnmx
    temp_601 = abs(temp_596);
    temp_602 = max(temp_601, temp_599);
    // 0x0012B8: 0xE043FF9142E7FF31 Ipa
    temp_603 = in_attr9.y;
    // 0x0012C8: 0x010410676C97F033 Mov32i
    // 0x0012D0: 0xE043FF9182E7FF32 Ipa
    temp_604 = in_attr9.z;
    // 0x0012D8: 0x49A005180A17040A Ffma
    temp_605 = fma(temp_333, fp_c6.data[40].y, temp_300);
    // 0x0012E8: 0x5080000000471414 Mufu
    temp_606 = 1.0 / temp_602;
    // 0x0012F0: 0x5C68100001471211 Fmul
    temp_607 = temp_595 * temp_606;
    // 0x0012F8: 0x5C68100001472D10 Fmul
    temp_608 = temp_594 * temp_606;
    // 0x001308: 0x5C68100001472F12 Fmul
    temp_609 = temp_596 * temp_606;
    // 0x001310: 0x3868104080071E2D Fmul
    temp_610 = temp_118 * 4.0;
    // 0x001318: 0xC0BA0163EFF71018 Tex
    temp_611 = textureLod(fp_t_tcb_16, vec3(temp_608, temp_607, temp_609), 0.0).xyz;
    temp_612 = temp_611.x;
    temp_613 = temp_611.y;
    temp_614 = temp_611.z;
    // 0x001328: 0x38681040E0071E2F Fmul
    temp_615 = temp_118 * 7.0;
    // 0x001330: 0x010000000017F014 Mov32i
    // 0x001338: 0x5C9807800127002C Mov
    // 0x001348: 0xD9A20182C2C71010 Texs
    temp_616 = textureLod(fp_t_tcb_18, vec3(temp_608, temp_607, temp_609), temp_610).xyz;
    temp_617 = temp_616.x;
    temp_618 = temp_616.y;
    temp_619 = temp_616.z;
    // 0x001350: 0xC1BA0143F2F71414 Tex
    temp_620 = textureLod(fp_t_tcb_14, vec4(temp_590, temp_591, temp_593, float(1)), temp_615).xyz;
    temp_621 = temp_620.x;
    temp_622 = temp_620.y;
    temp_623 = temp_620.z;
    // 0x001358: 0xDEBA0000C3773030 TexB
    temp_624 = texture(fp_t_cb7_20, vec3(temp_600, temp_603, temp_604)).x;
    // 0x001368: 0x3859103F80071E1E Fadd
    temp_625 = 0.0 - temp_118;
    temp_626 = temp_625 + 1.0;
    // 0x001370: 0x49A004980A170309 Ffma
    temp_627 = fma(temp_334, fp_c6.data[40].y, temp_302);
    // 0x001378: 0x3859103F80070012 Fadd
    temp_628 = 0.0 - temp_160;
    temp_629 = temp_628 + 1.0;
    // 0x001388: 0x49A011180A170822 Ffma
    temp_630 = fma(temp_335, fp_c6.data[40].y, temp_324);
    // 0x001390: 0x1E23E468DB970003 Fmul32i
    temp_631 = temp_160 * 0.193900004;
    // 0x001398: 0x49A011980A170723 Ffma
    temp_632 = fma(temp_336, fp_c6.data[40].y, temp_325);
    // 0x0013A8: 0x5C68100001E71E1E Fmul
    temp_633 = temp_626 * temp_626;
    // 0x0013B0: 0x49A0198400D70007 Ffma
    temp_634 = fma(temp_160, fp_c1.data[3].y, 8.40400028);
    // 0x0013B8: 0x4C68101809071204 Fmul
    temp_635 = temp_629 * fp_c6.data[36].x;
    // 0x0013C8: 0x5080000000371212 Mufu
    temp_636 = log2(temp_629);
    // 0x0013D0: 0x4C68101808772727 Fmul
    temp_637 = temp_90 * fp_c6.data[33].w;
    // 0x0013D8: 0x5080400000370404 Mufu
    temp_638 = abs(temp_635);
    temp_639 = log2(temp_638);
    // 0x0013E8: 0x5C68100001E71E08 Fmul
    temp_640 = temp_633 * temp_633;
    // 0x0013F0: 0x0103E2CD9E87F01E Mov32i
    // 0x0013F8: 0x0103F0000007F02F Mov32i
    // 0x001408: 0x51A0038400E7002D Ffma
    temp_641 = fma(temp_160, temp_634, fp_c1.data[3].z);
    // 0x001410: 0x49A0018400870817 Ffma
    temp_642 = fma(temp_640, fp_c1.data[2].x, temp_631);
    // 0x001418: 0x49A20F0400A7081E Ffma
    temp_643 = fma(temp_640, fp_c1.data[2].z, -0.168799996);
    // 0x001428: 0x4C9807980B470032 Mov
    // 0x001430: 0x32A017BF00070207 Ffma
    temp_644 = fma(temp_70, 0.5, 0.5);
    // 0x001438: 0x51A0168400F7002F Ffma
    temp_645 = fma(temp_160, temp_641, fp_c1.data[3].w);
    // 0x001448: 0x4C68101809170404 Fmul
    temp_646 = temp_639 * fp_c6.data[36].y;
    // 0x001450: 0x088BF05D63971717 Fadd32i
    temp_647 = temp_642 + -0.522800028;
    // 0x001458: 0x5C68100001E7081E Fmul
    temp_648 = temp_640 * temp_643;
    // 0x001468: 0x49A015180A170603 Ffma
    temp_649 = fma(temp_337, fp_c6.data[40].y, temp_326);
    // 0x001470: 0x0104066978D7F006 Mov32i
    // 0x001478: 0xF0F0000034470000 Depbar
    // 0x001488: 0x51A219180B472424 Ffma
    temp_650 = 0.0 - fp_c6.data[45].x;
    temp_651 = fma(temp_92, fp_c6.data[45].x, temp_650);
    // 0x001490: 0x51A219180B472525 Ffma
    temp_652 = 0.0 - fp_c6.data[45].x;
    temp_653 = fma(temp_93, fp_c6.data[45].x, temp_652);
    // 0x001498: 0x51A219180B470101 Ffma
    temp_654 = 0.0 - fp_c6.data[45].x;
    temp_655 = fma(temp_94, fp_c6.data[45].x, temp_654);
    // 0x0014A8: 0x5C6810000177002D Fmul
    temp_656 = temp_160 * temp_647;
    // 0x0014B0: 0x4C98079800870002 Mov
    // 0x0014B8: 0x5C60138002F71E32 Fmnmx
    temp_657 = min(temp_648, temp_645);
    // 0x0014C8: 0x4C98079800970000 Mov
    // 0x0014D0: 0x5C90008000470017 Rro
    // 0x0014D8: 0x4C98079800A7001E Mov
    // 0x0014E8: 0x5084000000271717 Mufu
    temp_658 = exp2(temp_646);
    temp_659 = clamp(temp_658, 0.0, 1.0);
    // 0x0014F0: 0x49A2030400970806 Ffma
    temp_660 = fma(temp_640, fp_c1.data[2].y, -3.60299993);
    // 0x0014F8: 0x4C9807980947002A Mov
    // 0x001508: 0x4C59101800470202 Fadd
    temp_661 = 0.0 - fp_c6.data[2].x;
    temp_662 = temp_661 + fp_c6.data[1].x;
    // 0x001510: 0x4C59101800570000 Fadd
    temp_663 = 0.0 - fp_c6.data[2].y;
    temp_664 = temp_663 + fp_c6.data[1].y;
    // 0x001518: 0x4C98079408270031 Mov
    // 0x001528: 0x4C59101800671E04 Fadd
    temp_665 = 0.0 - fp_c6.data[2].z;
    temp_666 = temp_665 + fp_c6.data[1].z;
    // 0x001530: 0x51A0030400B7081E Ffma
    temp_667 = fma(temp_640, temp_660, fp_c1.data[2].w);
    // 0x001538: 0x4C58101408172A06 Fadd
    temp_668 = fp_c6.data[37].x + fp_c5.data[32].y;
    // 0x001548: 0x51A0039800870202 Ffma
    temp_669 = fma(temp_662, temp_644, fp_c6.data[2].x);
    // 0x001550: 0x51A0039800970000 Ffma
    temp_670 = fma(temp_664, temp_644, fp_c6.data[2].y);
    // 0x001558: 0x4C68101406473131 Fmul
    temp_671 = fp_c5.data[32].z * fp_c5.data[25].x;
    // 0x001568: 0x51A0039800A70404 Ffma
    temp_672 = fma(temp_666, temp_644, fp_c6.data[2].z);
    // 0x001570: 0x4C68101808971207 Fmul
    temp_673 = temp_636 * fp_c6.data[34].y;
    // 0x001578: 0x5C68100001770617 Fmul
    temp_674 = temp_668 * temp_659;
    // 0x001588: 0xE04BFF9042E7FF06 Ipa
    temp_675 = in_attr8.y;
    temp_676 = clamp(temp_675, 0.0, 1.0);
    // 0x001590: 0x59A0168001E7081E Ffma
    temp_677 = fma(temp_640, temp_667, temp_656);
    // 0x001598: 0x386C104248070C2F Fmul
    temp_678 = temp_247 * 50.0;
    temp_679 = clamp(temp_678, 0.0, 1.0);
    // 0x0015A8: 0x5C5C30000FF7322D Fadd
    temp_680 = temp_657 + -0.0;
    temp_681 = clamp(temp_680, 0.0, 1.0);
    // 0x0015B0: 0x5C90008000770007 Rro
    // 0x0015B8: 0x4C68101808C71708 Fmul
    temp_682 = temp_674 * fp_c6.data[35].x;
    // 0x0015C8: 0x5084000000270707 Mufu
    temp_683 = exp2(temp_673);
    temp_684 = clamp(temp_683, 0.0, 1.0);
    // 0x0015D0: 0x4C68101808D71712 Fmul
    temp_685 = temp_674 * fp_c6.data[35].y;
    // 0x0015D8: 0x4C5C100400C71E2A Fadd
    temp_686 = temp_677 + fp_c1.data[3].x;
    temp_687 = clamp(temp_686, 0.0, 1.0);
    // 0x0015E8: 0x4C68101808E7171E Fmul
    temp_688 = temp_674 * fp_c6.data[35].z;
    // 0x0015F0: 0x5C68100002F72D32 Fmul
    temp_689 = temp_681 * temp_679;
    // 0x0015F8: 0x59A0110003170822 Ffma
    temp_690 = fma(temp_682, temp_671, temp_630);
    // 0x001608: 0x49A1041408270808 Ffma
    temp_691 = 0.0 - fp_c5.data[32].z;
    temp_692 = fma(temp_682, temp_691, temp_682);
    // 0x001610: 0x59A0118003171223 Ffma
    temp_693 = fma(temp_685, temp_671, temp_632);
    // 0x001618: 0x49A1091408271217 Ffma
    temp_694 = 0.0 - fp_c5.data[32].z;
    temp_695 = fma(temp_685, temp_694, temp_685);
    // 0x001628: 0x59A0018003171E03 Ffma
    temp_696 = fma(temp_688, temp_671, temp_649);
    // 0x001630: 0x5C58300002D72A2D Fadd
    temp_697 = 0.0 - temp_681;
    temp_698 = temp_687 + temp_697;
    // 0x001638: 0x49A10F1408271E1E Ffma
    temp_699 = 0.0 - fp_c5.data[32].z;
    temp_700 = fma(temp_688, temp_699, temp_688);
    // 0x001648: 0x4C68101808870707 Fmul
    temp_701 = temp_684 * fp_c6.data[34].x;
    // 0x001650: 0x5C58100000A7170A Fadd
    temp_702 = temp_695 + temp_605;
    // 0x001658: 0x59A0190002D70D0D Ffma
    temp_703 = fma(temp_256, temp_698, temp_689);
    // 0x001668: 0x5C58100000971E1E Fadd
    temp_704 = temp_700 + temp_627;
    // 0x001670: 0xE043FF9002E7FF09 Ipa
    temp_705 = in_attr8.x;
    // 0x001678: 0x59A0190002D70C0C Ffma
    temp_706 = fma(temp_247, temp_698, temp_689);
    // 0x001688: 0xE043FF8C82E7FF2E Ipa
    temp_707 = in_attr4.z;
    // 0x001690: 0x4C68101406470D0D Fmul
    temp_708 = temp_703 * fp_c5.data[25].x;
    // 0x001698: 0x59A0190002D70B0B Ffma
    temp_709 = fma(temp_252, temp_698, temp_689);
    // 0x0016A8: 0x4C68101406470C0C Fmul
    temp_710 = temp_706 * fp_c5.data[25].x;
    // 0x0016B0: 0xF0F0000034370000 Depbar
    // 0x0016B8: 0x49A020980A170505 Ffma
    temp_711 = fma(temp_338, fp_c6.data[40].y, temp_577);
    // 0x0016C8: 0x5C58100000570812 Fadd
    temp_712 = temp_692 + temp_711;
    // 0x0016D0: 0x4C98079808670005 Mov
    // 0x0016D8: 0x010404000007F008 Mov32i
    // 0x0016E8: 0x51A0029808670705 Ffma
    temp_713 = fma(temp_701, fp_c6.data[33].z, fp_c6.data[33].z);
    // 0x0016F0: 0xF0F0000034270000 Depbar
    // 0x0016F8: 0x4C68101407871818 Fmul
    temp_714 = temp_612 * fp_c5.data[30].x;
    // 0x001708: 0x4C68101407871919 Fmul
    temp_715 = temp_613 * fp_c5.data[30].x;
    // 0x001710: 0x4C68101407871A1A Fmul
    temp_716 = temp_614 * fp_c5.data[30].x;
    // 0x001718: 0x49A00C0400770202 Ffma
    temp_717 = fma(temp_669, fp_c1.data[1].w, temp_714);
    // 0x001728: 0x49A00C8400770007 Ffma
    temp_718 = fma(temp_670, fp_c1.data[1].w, temp_715);
    // 0x001730: 0x49A00D0400770404 Ffma
    temp_719 = fma(temp_672, fp_c1.data[1].w, temp_716);
    // 0x001738: 0x33A0044000070600 Ffma
    temp_720 = fma(temp_676, -2.0, 3.0);
    // 0x001748: 0x5C68100000670606 Fmul
    temp_721 = temp_676 * temp_676;
    // 0x001750: 0x4C68101407872C2C Fmul
    temp_722 = temp_619 * fp_c5.data[30].x;
    // 0x001758: 0x59A2010000572828 Ffma
    temp_723 = 0.0 - temp_717;
    temp_724 = fma(temp_87, temp_713, temp_723);
    // 0x001768: 0x59A2038000572929 Ffma
    temp_725 = 0.0 - temp_718;
    temp_726 = fma(temp_88, temp_713, temp_725);
    // 0x001770: 0x59A2020000572605 Ffma
    temp_727 = 0.0 - temp_719;
    temp_728 = fma(temp_89, temp_713, temp_727);
    // 0x001778: 0x49A504980BC73009 Ffma
    temp_729 = 0.0 - fp_c6.data[47].x;
    temp_730 = fma(temp_624, temp_729, temp_705);
    temp_731 = clamp(temp_730, 0.0, 1.0);
    // 0x001788: 0x5C68100000670000 Fmul
    temp_732 = temp_720 * temp_721;
    // 0x001790: 0x5080000000370909 Mufu
    temp_733 = log2(temp_731);
    // 0x001798: 0x59A0010002772828 Ffma
    temp_734 = fma(temp_724, temp_637, temp_717);
    // 0x0017A8: 0x4C68101407871002 Fmul
    temp_735 = temp_617 * fp_c5.data[30].x;
    // 0x0017B0: 0x4C68101407871106 Fmul
    temp_736 = temp_618 * fp_c5.data[30].x;
    // 0x0017B8: 0x59A0038002772929 Ffma
    temp_737 = fma(temp_726, temp_637, temp_718);
    // 0x0017C8: 0x59A0020002770505 Ffma
    temp_738 = fma(temp_728, temp_637, temp_719);
    // 0x0017D0: 0x49A016180857162C Ffma
    temp_739 = fma(temp_623, fp_c6.data[33].y, temp_722);
    // 0x0017D8: 0x5C58100001272812 Fadd
    temp_740 = temp_734 + temp_712;
    // 0x0017E8: 0x49A0011808571414 Ffma
    temp_741 = fma(temp_621, fp_c6.data[33].y, temp_735);
    // 0x0017F0: 0x49A0031808571506 Ffma
    temp_742 = fma(temp_622, fp_c6.data[33].y, temp_736);
    // 0x0017F8: 0x5C58100000A7290A Fadd
    temp_743 = temp_737 + temp_702;
    // 0x001808: 0x5C58100001E70505 Fadd
    temp_744 = temp_738 + temp_704;
    // 0x001810: 0x4C68101406470B02 Fmul
    temp_745 = temp_709 * fp_c5.data[25].x;
    // 0x001818: 0x59A1090001272B12 Ffma
    temp_746 = 0.0 - temp_740;
    temp_747 = fma(temp_7, temp_746, temp_740);
    // 0x001828: 0x59A0110001470D0D Ffma
    temp_748 = fma(temp_708, temp_741, temp_690);
    // 0x001830: 0x59A0118000670C0C Ffma
    temp_749 = fma(temp_710, temp_742, temp_693);
    // 0x001838: 0x59A1050000A72B0A Ffma
    temp_750 = 0.0 - temp_743;
    temp_751 = fma(temp_7, temp_750, temp_743);
    // 0x001848: 0x59A1028000572B05 Ffma
    temp_752 = 0.0 - temp_744;
    temp_753 = fma(temp_7, temp_752, temp_744);
    // 0x001850: 0x59A0018002C70203 Ffma
    temp_754 = fma(temp_745, temp_739, temp_696);
    // 0x001858: 0x4C98079802870006 Mov
    // 0x001868: 0x59A006800127130D Ffma
    temp_755 = fma(temp_179, temp_747, temp_748);
    // 0x001870: 0x4C98079802970004 Mov
    // 0x001878: 0x59A0060000A70F02 Ffma
    temp_756 = fma(temp_117, temp_751, temp_749);
    // 0x001888: 0x4C68101803770000 Fmul
    temp_757 = temp_732 * fp_c6.data[13].w;
    // 0x001890: 0x59A0018000570E03 Ffma
    temp_758 = fma(temp_184, temp_753, temp_754);
    // 0x001898: 0x51A0031802872424 Ffma
    temp_759 = fma(temp_651, fp_c6.data[10].x, fp_c6.data[10].x);
    // 0x0018A8: 0x5C68100000D71F1F Fmul
    temp_760 = temp_292 * temp_755;
    // 0x0018B0: 0x51A0021802972525 Ffma
    temp_761 = fma(temp_653, fp_c6.data[10].y, fp_c6.data[10].y);
    // 0x0018B8: 0x5C68100000272002 Fmul
    temp_762 = temp_321 * temp_756;
    // 0x0018C8: 0x4C98079802A70004 Mov
    // 0x0018D0: 0x5C68100000372121 Fmul
    temp_763 = temp_323 * temp_758;
    // 0x0018D8: 0x49A2001803570006 Ffma
    temp_764 = 0.0 - temp_757;
    temp_765 = fma(temp_757, fp_c6.data[13].y, temp_764);
    // 0x0018E8: 0x49A00F9406C71D1D Ffma
    temp_766 = fma(temp_204, fp_c5.data[27].x, temp_760);
    // 0x0018F0: 0x49A0011406C71C1C Ffma
    temp_767 = fma(temp_205, fp_c5.data[27].x, temp_762);
    // 0x0018F8: 0x51A0021802A70101 Ffma
    temp_768 = fma(temp_655, fp_c6.data[10].z, fp_c6.data[10].z);
    // 0x001908: 0x49A0109406C71B1B Ffma
    temp_769 = fma(temp_206, fp_c5.data[27].x, temp_763);
    // 0x001910: 0x4C68101803170904 Fmul
    temp_770 = temp_733 * fp_c6.data[12].y;
    // 0x001918: 0x5C58300002471D02 Fadd
    temp_771 = 0.0 - temp_759;
    temp_772 = temp_766 + temp_771;
    // 0x001928: 0x5C58300002571C03 Fadd
    temp_773 = 0.0 - temp_761;
    temp_774 = temp_767 + temp_773;
    // 0x001930: 0x5C90008000470007 Rro
    // 0x001938: 0x49A012180BF70205 Ffma
    temp_775 = fma(temp_772, fp_c6.data[47].w, temp_759);
    // 0x001948: 0x5080000000270707 Mufu
    temp_776 = exp2(temp_770);
    // 0x001950: 0x5C58300000171B02 Fadd
    temp_777 = 0.0 - temp_768;
    temp_778 = temp_769 + temp_777;
    // 0x001958: 0x49A012980BF70303 Ffma
    temp_779 = fma(temp_774, fp_c6.data[47].w, temp_761);
    // 0x001968: 0x49A2001803470004 Ffma
    temp_780 = 0.0 - temp_757;
    temp_781 = fma(temp_757, fp_c6.data[13].x, temp_780);
    // 0x001970: 0x49A2001803670000 Ffma
    temp_782 = 0.0 - temp_757;
    temp_783 = fma(temp_757, fp_c6.data[13].z, temp_782);
    // 0x001978: 0x5C60178000572405 Fmnmx
    temp_784 = max(temp_759, temp_775);
    // 0x001988: 0x49A000980BF70202 Ffma
    temp_785 = fma(temp_778, fp_c6.data[47].w, temp_768);
    // 0x001990: 0x5C60178000372503 Fmnmx
    temp_786 = max(temp_761, temp_779);
    // 0x001998: 0x59A0028000470504 Ffma
    temp_787 = fma(temp_784, temp_781, temp_784);
    // 0x0019A8: 0x5C60178000270102 Fmnmx
    temp_788 = max(temp_768, temp_785);
    // 0x0019B0: 0x59A0018000670301 Ffma
    temp_789 = fma(temp_786, temp_765, temp_786);
    // 0x0019B8: 0x4C68101802B70703 Fmul
    temp_790 = temp_776 * fp_c6.data[10].w;
    // 0x0019C8: 0x0103E0000007F005 Mov32i
    // 0x0019D0: 0x5C9807800FF70006 Mov
    // 0x0019D8: 0x0103F8000007F007 Mov32i
    // 0x0019E8: 0x59A0010000070202 Ffma
    temp_791 = fma(temp_788, temp_783, temp_788);
    // 0x0019F0: 0x5C59100000471D00 Fadd
    temp_792 = 0.0 - temp_766;
    temp_793 = temp_792 + temp_787;
    // 0x0019F8: 0x5C59100000171C01 Fadd
    temp_794 = 0.0 - temp_767;
    temp_795 = temp_794 + temp_789;
    // 0x001A08: 0x4C58100C03872E04 Fadd
    temp_796 = temp_707 + fp_c3.data[14].x;
    // 0x001A10: 0x5C59100000271B02 Fadd
    temp_797 = 0.0 - temp_769;
    temp_798 = temp_797 + temp_791;
    // 0x001A18: 0x59A00E8000370000 Ffma
    temp_799 = fma(temp_793, temp_790, temp_766);
    // 0x001A28: 0x59A00E0000370101 Ffma
    temp_800 = fma(temp_795, temp_790, temp_767);
    // 0x001A30: 0x49A37F8C03C70404 Ffma
    temp_801 = 0.0 - fp_c3.data[15].x;
    temp_802 = fma(temp_796, temp_801, -0.0);
    // 0x001A38: 0x59A00D8000370202 Ffma
    temp_803 = fma(temp_798, temp_790, temp_769);
    // 0x001A48: 0x0103F8000007F003 Mov32i
    // 0x001A50: 0xE30000000007000F Exit
    out_attr0.x = temp_799;
    out_attr0.y = temp_800;
    out_attr0.z = temp_803;
    out_attr0.w = 1.0;
    out_attr1.x = temp_802;
    out_attr1.y = 0.125;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
